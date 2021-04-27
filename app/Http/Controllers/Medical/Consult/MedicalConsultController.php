<?php

namespace App\Http\Controllers\Medical\Consult;

use App\Http\Controllers\Controller;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Consult\MedicalConsultType;
use Carbon\Carbon;
use Illuminate\Http\Request;

class MedicalConsultController extends Controller
{
    public function store(Request $request)
    {
        $consultExist = false;
        // $consulType = MedicalConsultType::find($request->input('data.scheduleCategory'));
        $start = Carbon::createFromTimeString($request->input('data.scheduleDatetime'));


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
            'patient_id' => $request->input('data.patient'),
            'doctor_id' => $request->input('data.doctor'),
            'medicalconsulttype_id' => $request->input('data.scheduleCategory'),
            'consult_reason' => $request->input('data.scheduleNote'),
            'consult_schedule_start' => Carbon::createFromTimeString($request->input('data.scheduleDatetime')),
            'consult_schedule_finish' => Carbon::createFromTimeString($request->input('data.scheduleDatetime')),
            'branch_id' => $request->input('data.branch'),
            'medicalconsultstatus_id' => 1,
        ]);
        return $consult;

        //Todo
        // Revisar si existe una cita ya creada con anterioridad que coincida con la hora ocupada
        // Agregar el tiempo de finalizacion de la cita automaticamente de acuerdo a tipo de cita
        // Agregar verificaciones de request
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
}


// $table->unsignedInteger('id', true);
//             $table->unsignedMediumInteger('patient_id', false);
//             $table->unsignedMediumInteger('created_by', false)->nullable();
//             $table->unsignedTinyInteger('medicalconsulttype_id', false);
//             $table->unsignedMediumInteger('updated_by', false)->nullable();
//             $table->string('update_note', 255)->nullable();
//             $table->string('consult_reason', 500);
//             $table->dateTime('consult_schedule_start');
//             $table->dateTime('consult_schedule_finish');
//             $table->dateTime('consult_start_at')->nullable();
//             $table->dateTime('consult_finish_at')->nullable();
//             $table->unsignedSmallInteger('branch_id', false);
//             $table->unsignedTinyInteger('medicalconsultstatus_id', false);

// $consult = new MedicalConsult;
//         $consult->patient_id = $request->input('data.patient_id');
//         $consult->medicalconsulttype_id = $request->input('data.medicalconsulttype_id');
//         $consult->consult_reason = $request->input('data.consult_reason');
//         // 'consult_schedule_start' => Carbon::now(),
//         // 'consult_schedule_finish' => Carbon::now(),
//         $consult->branch_id = $request->input('data.branch_id');
//         $consult->medicalconsultstatus_id = 1;
//         $consult->save();