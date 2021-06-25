<?php

namespace App\Http\Controllers\Checkup;

use App\Http\Controllers\Controller;
use App\Models\Checkup\Checkup;
use App\Models\Checkup\CheckupCategory;
use App\Models\Checkup\CheckupStatus;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Consult\MedicalConsultCategory;
use App\Models\Medical\Test\MedicalTest;
use App\Models\Medical\Test\MedicalTestOrder;
use App\Models\Product\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CheckupCategoryController extends Controller
{
    public function getAllCategories()
    {
        $categories = CheckupCategory::all();
        return response()->json($categories);
    }

    public function getCheckupByID($id)
    {
        $checkup = Checkup::findOrFail($id);
        $checkup->load('consults.testOrderScheduled.product');

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
            'data' => $checkups->load('category', 'patient')
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
            $medicalconsultcategory_id = str_contains($item['code'], 'IMA') ? 3 : 4;
            $medicalspecialty_id = str_contains($item['code'], 'IMA') ? 11 : 12;
            $doctor_id = str_contains($item['code'], 'IMA') ? 2 : 1;
            $consult = MedicalConsult::create([
                'patient_id' => $request['data.patient_id'],
                'doctor_id' => $doctor_id,
                'consult_reason' => 'Estudio '.$item['name'].' de checkup '.$request['data.name'],
                'consult_schedule_start' => Carbon::createFromTimeString($item['consult_schedule_start']),
                'consult_schedule_finish' => Carbon::createFromTimeString($item['consult_schedule_start']),
                'medicalspecialty_id' => $medicalspecialty_id,
                'medicalconsultcategory_id' => $medicalconsultcategory_id,
                'branch_id' => $item['branch_id'],
                'medicalconsultstatus_id' => 1,
                'checkup_id' => $checkup
            ]);
            
            $test = MedicalTest::create([
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
            array_push($checkups, $consult);
        }
        return response()->json($checkups);
    }
}
