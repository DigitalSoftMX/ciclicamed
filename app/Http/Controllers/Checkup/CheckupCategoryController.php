<?php

namespace App\Http\Controllers\Checkup;

use App\Http\Controllers\Controller;
use App\Models\Checkup\Checkup;
use App\Models\Checkup\CheckupCategory;
use App\Models\Checkup\CheckupStatus;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Test\MedicalTest;
use App\Models\Medical\Test\MedicalTestOrder;
use App\Models\Product\Product;
use App\Models\User\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CheckupCategoryController extends Controller
{
    public function getCheckupTest($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole(['Doctor', 'Administrador']))
        {
            $tests = Checkup::findOrFail($id)->test;
            foreach($tests as $test)
            {
                $test->load('result', 'order', 'order.product');
                if(isset($test['result']['results']))
                {
                    $test['result']['results'] = json_decode($test['result']['results']);
                }
            }
            return response()->json($tests);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getSchedules()
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Checkup') || $user->hasRole('Administrador'))
        {
            $schedules = MedicalConsult::whereNotNull('checkup_id')
            ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'branch_id', 'doctor_id', 'medicalconsultcategory_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason'])
            ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
            return response()->json($schedules);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getAllCategories()
    {
        $categories = CheckupCategory::all();
        return response()->json($categories);
    }

    public function getCheckupByID($id)
    {
        $checkup = Checkup::findOrFail($id);
        $checkup->load('consults.status', 'category', 'consults.testScheduled.order.product',  'consults.testScheduled.status');

        return response()->json($checkup);
    }

    public function getPendings(Request $request)
    {
        $checkups = [];
        if($request->has('query'))
        {
            $query = $request->input('query');
            $checkups = Checkup::whereHas('status', function($query) {
                $query->where('name', 'En estudios')
                      ->orWhere('name', 'Estudios completados')
                      ->orWhere('name', 'En consultas');
            })
            ->where(function($item) use($query) {
                $item->whereHas('patient', function($item) use($query) {
                    $item->where('first_name', 'like', '%'.$query.'%')
                          ->orWhere('last_name', 'like', '%'.$query.'%');
                })
                ->orWhereHas('category', function($item) use($query) {
                    $item->where('name', 'like', '%'.$query.'%');
                })
                ->orWhereHas('status', function($item) use($query) {
                    $item->where('name', 'like', '%'.$query.'%');
                })
                ->orWhere('id', 'like', '%'.$query.'%');
            })->paginate();
        } else {
            $checkups = Checkup::whereHas('status', function($query) {
                $query->where('name', 'En estudios')
                      ->orWhere('name', 'En consultas');
            })->paginate();
        }
        
        $response = [
            'pagination' => [
                'total' => $checkups->total(),
                'per_page' => $checkups->perPage(),
                'current_page' => $checkups->currentPage(),
                'last_page' => $checkups->lastPage(),
                'from' => $checkups->firstItem(),
                'to' => $checkups->lastItem()
            ],
            'data' => $checkups->load('category', 'patient', 'status')
        ];
        return response()->json($response);
    }

    public function createCheckups(Request $request)
    {
        $checkupStatus = CheckupStatus::where('name', 'En estudios')->first()->id;
        $checkup = Checkup::create([
            'patient_id' => $request['data.patient_id'],
            'checkupcategory_id' => $request['data.checkupcategory_id'],
            'checkupstatus_id' => $checkupStatus,
        ])->id;
        $checkups = [];
        foreach($request['data.checkupList'] as $item)
        {
            if($item['branch_id'] > 0)
            {
                $medicalconsultcategory_id = str_contains($item['code'], 'IMA') ? 3 : 4;
                $medicalspecialty_id = str_contains($item['code'], 'IMA') ? 12 : 11;
                array_push($checkups, $this->createCheckupData($request, $item, $checkup, $medicalconsultcategory_id, $medicalspecialty_id));
            }
        }
        return response()->json($checkups);
    }

    public function updateCheckups(Request $request)
    {
        $checkups = [];
        foreach($request['data.checkupList'] as $item)
        {
            if($item['medicalconsult_id'] > 0)
            {
                $doctor_id = 0;
                if(str_contains($item['code'], 'IMA'))
                {
                    $doctor_id = 2;
                }
                if(str_contains($item['code'], 'LAB'))
                {
                    $doctor_id = 1;
                }
                if(str_contains($item['code'], 'CON'))
                {
                    $doctor_id = $item['doctor_id'];
                }
                $consult = MedicalConsult::findOrFail($item['medicalconsult_id'])->update([
                    'doctor_id' => $doctor_id,
                    'consult_schedule_start' => Carbon::createFromTimeString($item['consult_schedule_start']),
                    'consult_schedule_finish' => Carbon::createFromTimeString($item['consult_schedule_start']),
                    'branch_id' => $item['branch_id'],
                ]);
                array_push($checkups, $consult);
            } elseif($item['branch_id'] > 0)
            {
                $medicalconsultcategory_id = str_contains($item['code'], 'CON') ? 2 :(str_contains($item['code'], 'IMA') ? 3 : 4);
                $checkup = $this->createCheckupData($request, $item, $request['data.checkup_id'], $medicalconsultcategory_id, $item['medicalspecialty_id']);
                array_push($checkups, $checkup);
            }
        }
        return response()->json($checkups);
    }

    public function cancelCheckup($id)
    {
        $checkup = Checkup::findOrFail($id)->update([
            'checkupstatus_id' => 4
        ]);
        $consults = MedicalConsult::where('checkup_id', $id);
        $consults->update([
            'medicalconsultstatus_id' => 6
        ]);
        
        foreach($consults->get() as $consult)
        {
            MedicalTest::where('scheduled_in', $consult->id)->update([
                'medicalteststatus_id' => 5
            ]);
        }
        return response()->json($checkup);
    }

    private function createCheckupData($request, $item, $checkup, $medicalconsultcategory_id, $medicalspecialty_id)
    {
        $doctor_id = 0;
        if(str_contains($item['code'], 'IMA'))
        {
            $doctor_id = 2;
        }
        if(str_contains($item['code'], 'LAB'))
        {
            $doctor_id = 1;
        }
        if(str_contains($item['code'], 'CON'))
        {
            $doctor_id = $item['doctor_id'];
        }
        $consult_reason = str_contains($item['code'], 'CON') ? $item['name'].' de checkup '.$request['data.name'] : 'Estudio '.$item['name'].' de checkup '.$request['data.name'];
        
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Paciente'))
        {
            $consult = MedicalConsult::create([
                'patient_id' => $user['patient']['id'],
                'doctor_id' => $doctor_id,
                'consult_reason' => $consult_reason,
                'consult_schedule_start' => Carbon::parse($item['consult_schedule_start']),
                'consult_schedule_finish' => Carbon::parse($item['consult_schedule_start'])->addMinutes(30),
                'medicalspecialty_id' => $medicalspecialty_id,
                'medicalconsultcategory_id' => $medicalconsultcategory_id,
                'branch_id' => $item['branch_id'],
                'medicalconsultstatus_id' => 1,
                'checkup_id' => $checkup
            ]);
        }
        else
        {
            $consult = MedicalConsult::create([
                'patient_id' => $request['data.patient_id'],
                'doctor_id' => $doctor_id,
                'consult_reason' => $consult_reason,
                'consult_schedule_start' => Carbon::parse($item['consult_schedule_start']),
                'consult_schedule_finish' => Carbon::parse($item['consult_schedule_finish']),
                'medicalspecialty_id' => $medicalspecialty_id,
                'medicalconsultcategory_id' => $medicalconsultcategory_id,
                'branch_id' => $item['branch_id'],
                'medicalconsultstatus_id' => 1,
                'checkup_id' => $checkup
            ]);
        }
        
        
        if($medicalconsultcategory_id !== 2)
        {
            $test = MedicalTest::orderBy('id', 'desc');
            $id = 0;
            if($test->get()->isNotEmpty())
            {
                $id = intval($test->take(1)->first()->id);
                $id++;
            }
            else
            {
                $id = 1;
            }

            $code = "MUE-" . str_pad((int) $id, 3, "0", STR_PAD_LEFT);
            $test = MedicalTest::create([
                'test_code' => $code,
                'scheduled_in' => $consult->id,
                'medicalteststatus_id' => 1
            ]);
    
            $product_id = Product::where('product_code', $item['code'])->where('productstatus_id', 1)->first()->id;
    
            $order = MedicalTestOrder::create([
                'medicaltest_id' => $test->id,
                'product_id' => $product_id
            ]);
    
            $consult['test'] = $test;
            $test['order'] = $order;
        }

        return $consult;
    }
}
