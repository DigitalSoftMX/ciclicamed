<?php

namespace App\Http\Controllers\Medical\Consult;

use App\Http\Controllers\Controller;
use App\Http\Requests\Medical\Consult\MedicalConsultRequest;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Consult\MedicalConsultStatus;
use App\Models\Medical\Consult\MedicalConsultCategory;
use App\Models\Medical\Prescription\MedicalPrescription;
use App\Models\Medical\Test\MedicalTest;
use App\Models\Medical\Test\MedicalTestOrder;
use App\Models\Medical\Test\MedicalTestStatus;
use App\Models\User\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PhpParser\Node\Expr\Cast\Object_;

class MedicalConsultController extends Controller
{
    public function store(Request $request)
    {
        $consultExist = false;
        // $consulType = MedicalConsultCategory::find($request->input('data.scheduleCategory'));


        // switch($consulType->id)
        // {
        //     case 1
        // }

        // if($request->input('data.doctor_id'))
        // {
        //     $consultExist = MedicalConsult::where('patient_id', $request->input('data.patient_id'))        
        //                 ->where('created_by', )
        //                 ->where('consult_schedule_start', '<=', $start)->where('consult_schedule_finish', '>=', $start)->get();
        // }
        // else
        // {
        //     $consultExist = MedicalConsult::where('patient_id', $request->input('data.patient_id'))        
        //                 ->where('created_by', )
        //                 ->where('consult_schedule_start', '<=', $start)->where('consult_schedule_finish', '>=', $start)->get();
        // }

        $user = User::findOrFail(Auth::user()->id)->hasRole(['Paciente', 'Laboratorio', 'Imagenología']);
        if(!$user)
        {
            $consult = MedicalConsult::create([
                'patient_id' => $request->input('data.patient_id'),
                'doctor_id' => $request->input('data.doctor_id'),
                'medicalconsultcategory_id' => $request->input('data.medicalconsultcategory_id'),
                'consult_reason' => $request->input('data.consult_reason'),
                'consult_schedule_start' => Carbon::parse($request->input('data.consult_schedule_start')),
                'consult_schedule_finish' => Carbon::parse($request->input('data.consult_schedule_finish')),
                'medicalspecialty_id' => $request->input('data.medicalspecialty_id'),
                'branch_id' => $request->input('data.branch_id'),
                'medicalconsultstatus_id' => 1,
            ]);
            $consult->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
            return  response()->json($consult);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
        //Todo
        // Revisar si existe una cita ya creada con anterioridad que coincida con la hora ocupada
        // Agregar verificaciones de request
        // Revisar el envio de tiempo y conversion de Carbon
    }

    public function updateSchedule(Request $request, $id)
    {
        $user = User::findOrFail(Auth::user()->id)->hasRole(['Paciente', 'Laboratorio', 'Imagenología']);
        if(!$user)
        {
            $consult = MedicalConsult::findOrFail($id);
            $consult->update([
                'patient_id' => $request->input('data.patient_id'),
                'doctor_id' => $request->input('data.doctor_id'),
                'medicalconsultcategory_id' => $request->input('data.medicalconsultcategory_id'),
                'consult_reason' => $request->input('data.consult_reason'),
                'consult_schedule_start' => Carbon::createFromTimestamp($request->input('data.consult_schedule_start')),
                'consult_schedule_finish' => Carbon::createFromTimestamp($request->input('data.consult_schedule_finish')),
                'medicalspecialty_id' => $request->input('data.medicalspecialty_id'),
                'branch_id' => $request->input('data.branch_id'),
                'medicalconsultstatus_id' => 1,
            ]);
            return response()->json($consult);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getConsultTypes()
    {
        $type = MedicalConsultCategory::all();
        return response()->json($type);
    }

    public function cancelConsult(Request $request, $id)
    {
        $user = User::findOrFail(Auth::user()->id)->hasRole(['Paciente', 'Laboratorio', 'Imagenología']);
        if(!$user)
        {
            $consultType = MedicalConsultStatus::where('name', 'Cancelado')->firstOrFail()->id;
            $consult = MedicalConsult::findOrFail($id);
            $today = Carbon::now()->startOfDay();
            $consultDate = Carbon::parse($consult->consult_schedule_start)->startOfDay();
            $dayDifference = $today->diffInDays($consultDate, false);
            if ($dayDifference < 0)
            {
                return response()->json([
                    'errors' => [
                        'date' => [
                            "Solo se pueden cancelar citas del día de hoy o posteriores"
                        ]
                    ]
                ], 422);
            }
            if(in_array($consult->status->name, ['En consulta', 'Finalizado', 'Cancelado']))
            {
                return response()->json([
                    'errors' => [
                        'consult' => [
                            "No se puede cancelar esta cita por que está {$consult->status->name}"
                        ]
                    ]
                ], 422);
            }

            $consult->update([
                'medicalconsultstatus_id' => $consultType,
                'consult_schedule_start' => Carbon::parse($consult->consult_schedule_start)->setTime(21,0,0),
                'consult_schedule_finish' => Carbon::parse($consult->consult_schedule_start)->setTime(21,0,0)
            ]);
            $consult->status;
            return response()->json($consult);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getTests($id)
    {
        $consult = MedicalConsult::findOrFail($id);
        $testCancelStatus = MedicalTestStatus::where('name', 'Estudio cancelado')->first()->id;
        $consultOrder = $consult->testsCreated->load('order.product:id,name,product_code', 'results', 'samples')->where('medicalteststatus_id', '<>', $testCancelStatus)->all();
        return response()->json($consultOrder);
    }

    public function createTest(Request $request, $id)
    {
        $testStatus = MedicalTestStatus::where('name', 'Estudio creado')->first()->id;
        foreach($request->input('data') as $order)
        {
            if($order['order']['medicaltest_id'] === -1)
            {
                $test = MedicalTest::create([
                'created_in' => $id,
                'scheduled_in' => null,
                'finished_at' => null,
                'medicalteststatus_id' => $testStatus
                ]);
                MedicalTestOrder::create([
                    'medicaltest_id' => $test->id,
                    'product_id' => $order['order']['product_id'],
                    'updated_by' => null,
                    'update_note' => null
                ]);
            } else {
                MedicalTest::where('id', $order['id'])->update([
                    'medicalteststatus_id' => $order['status'] ?? $order['order']['status']
                ]);
                MedicalTestOrder::create($order['order']);
            }
        }

        $test = MedicalConsult::findOrFail($id)->testsCreated->load('order.product:id,name', 'results', 'samples')->where('medicalteststatus_id', '<>', 5)->all();
        return response()->json($request->input('data'));
    }

    public function getFollowUps($id)
    {
        $consult = MedicalConsult::findOrFail($id);
        if($consult->followUp->first())
        {
            $consult->followUp->first()->followUp->data = json_decode($consult->followUp->first()->followUp->data);
            return response()->json($consult->followUp->first());
        }
        return response()->json(null, 404);
    }

    public function getPrescriptions($id)
    {
        $consult = MedicalConsult::findOrFail($id);
        return response()->json($consult->prescriptions->load('medicament'));
    }

    public function getSpecialty($id)
    {
        $consult = MedicalConsult::findOrFail($id);
        $consult->attachments->first()->pivot->data = json_decode($consult->attachments->first()->pivot->data);
        return response()->json($consult->attachments->first()->pivot);
    }

    public function createPrescription(Request $request, $id)
    {
        MedicalPrescription::where('medicalconsult_id', $id)->delete();
        $prescription = [];
        foreach($request->input('data') as $medicament)
        {
            $data = MedicalPrescription::create([
                'medicalconsult_id' => $id,
                'medicament_id' => $medicament['medicament_id'],
                'administation_type' => $medicament['administation_type'],
                'rate' => $medicament['rate'],
                'duration' => $medicament['duration'],
                'update_by' => $medicament['update_by'] ?? null,
                'update_note' => $medicament['update_note'] ?? null
            ]);
            array_push($prescription, $data);
        }
        return response()->json($prescription);
    }

    public function getConsultInfo($id)
    {
        $user = User::findOrFail(Auth::user()->id)->hasRole('Paciente');
        $consult = MedicalConsult::findOrFail($id);
        if($user)
        {
            $data = $consult->get(['id', 'consult_schedule_start', 'consult_schedule_finish']);
            return response()->json($data);
        }
        
        return response()->json($consult);
    }

    public function getHistory($id)
    {
        $consult = MedicalConsult::findOrFail($id)->getLastHistory;
        $consult->data = json_decode($consult->data);
        return response()->json($consult);
    }

    public function getDoctor($id)
    {
        $consult = MedicalConsult::findOrFail($id)->doctor->load('specialties');
        return response()->json($consult);
    }

    public function startSchedule($id)
    {
        return response()->json([], 200)->withCookie('consult', $id);
    }
}