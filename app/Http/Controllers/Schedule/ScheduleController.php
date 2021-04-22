<?php

namespace App\Http\Controllers\Schedule;

use App\Events\ScheduleEvent;
use App\Http\Controllers\Controller;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Patient\Patient;
use App\Models\User\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends Controller
{
    public function showPatientSchedule($id)
    {
        $id = Auth::user()->id;
        $patient = MedicalConsult::where('patient_id', '=', $id)
                                ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'branch_id', 'created_by', 'medicalconsulttype_id', 'medicalconsultstatus_id', 'patient_id'])
                                ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
        //broadcast(new ScheduleEvent($patient));
        return response()->json($patient);
    }

    public function showEmployeeSchedule($id)
    {
        $employee = User::findOrFail($id)->patient;
    }
}
