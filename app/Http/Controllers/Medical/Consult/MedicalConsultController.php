<?php

namespace App\Http\Controllers\Medical\Consult;

use App\Http\Controllers\Controller;
use App\Http\Requests\Medical\Consult\MedicalConsultRequest;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Consult\MedicalConsultStatus;
use App\Models\Medical\Consult\MedicalConsultType;
use Carbon\Carbon;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\Cast\Object_;

class MedicalConsultController extends Controller
{
    public function store(Request $request)
    {
        $consultExist = false;
        // $consulType = MedicalConsultType::find($request->input('data.scheduleCategory'));


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

        
        $consult = MedicalConsult::create([
            'patient_id' => $request->input('data.patient_id'),
            'doctor_id' => $request->input('data.doctor_id'),
            'medicalconsulttype_id' => $request->input('data.medicalconsulttype_id'),
            'consult_reason' => $request->input('data.consult_reason'),
            'consult_schedule_start' => Carbon::parse($request->input('data.consult_schedule_start')),
            'consult_schedule_finish' => Carbon::parse($request->input('data.consult_schedule_start')),
            'branch_id' => $request->input('data.branch_id'),
            'medicalconsultstatus_id' => 1,
        ]);
        $consult->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
        return $consult;

        //Todo
        // Revisar si existe una cita ya creada con anterioridad que coincida con la hora ocupada
        // Agregar el tiempo de finalizacion de la cita automaticamente de acuerdo a tipo de cita
        // Agregar verificaciones de request
        // Revisar el envio de tiempo y conversion de Carbon
    }

    public function updateSchedule(Request $request, $id)
    {
        $consult = MedicalConsult::findOrFail($id);
        $consult->update([
            'patient_id' => $request->input('data.patient_id'),
            'doctor_id' => $request->input('data.doctor_id'),
            'medicalconsulttype_id' => $request->input('data.medicalconsulttype_id'),
            'consult_reason' => $request->input('data.consult_reason'),
            'consult_schedule_start' => Carbon::createFromTimestamp($request->input('data.consult_schedule_start')),
            'consult_schedule_finish' => Carbon::createFromTimestamp($request->input('data.consult_schedule_start')),
            'branch_id' => $request->input('data.branch_id'),
            'medicalconsultstatus_id' => 1,
        ]);
        return response()->json($consult);
    }

    public function getConsultTypes()
    {
        $type = MedicalConsultType::all();
        return response()->json($type);
    }

    public function getConsultsByPatient($id)
    {
        $patient = MedicalConsult::where('patient_id', '=', $id)
                                ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'branch_id', 'doctor_id', 'medicalconsulttype_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason'])
                                ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
        //broadcast(new ScheduleEvent($patient));
        return response()->json($patient);
    }

    public function cancelConsult(Request $request, $id)
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

    public function getTests($id)
    {
        $consult = MedicalConsult::findOrFail($id);
        return response()->json($consult->testsCreated->load(['medicalOrders', 'medicalResults']));
    }

    public function getFollowUps($id)
    {
        $consult = MedicalConsult::findOrFail($id);
        return response()->json($consult->followUps);
    }
}