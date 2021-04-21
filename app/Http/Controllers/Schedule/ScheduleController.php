<?php

namespace App\Http\Controllers\Schedule;

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
                                ->whereYear('consult_schedule_start', '=', Carbon::now()->format('Y'))
                                ->whereMonth('consult_schedule_start', '=', Carbon::now()->format('m'))
                                ->get()
                                ->load('doctor:id,first_name,last_name', 'status');

        return view('test', [
            'schedules' => $patient
        ]);
    }

    public function showEmployeeSchedule($id)
    {
        $employee = User::findOrFail($id)->patient;
    }
}
