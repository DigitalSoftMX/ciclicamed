<?php

namespace App\Http\Controllers\Branch;

use App\Http\Controllers\Controller;
use App\Models\Branch\Branch;
use App\Models\Employee\EmployeeSchedule;
use App\Models\Employee\EmployeeStatus;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\MedicalSpecialty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BranchController extends Controller
{
    public function getAllBranches()
    {
        $branches = Branch::all();
        return response()->json($branches);
    }

    public function getDoctorsAllSpecialties($id)
    {
        DB::statement("SET SQL_MODE=''");
        $employeeStatus = EmployeeStatus::where('name', 'Empleado')->first()->id;
        $specialties = MedicalSpecialty::with(['doctors' => function($query) use ($id, $employeeStatus){
            $query->where('employeestatus_id', $employeeStatus)
            ->whereHas('schedules', function($query) use($id) {
                $query->where('branch_id', $id)->groupBy('branch_id', 'employee_id');
            })->groupBy('employee_id', 'medicalspecialty_id')->orderBy('employees.last_name', 'ASC');
        }])->get();
        return response()->json($specialties);
    }

    public function getSchedules($id, $employeeID)
    {
        $schedules = MedicalConsult::where('doctor_id', $employeeID)->where('branch_id', $id)
                                ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'branch_id', 'doctor_id', 'medicalconsultcategory_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason'])
                                ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
        //broadcast(new ScheduleEvent($patient));
        return response()->json($schedules);
    }

    public function getBusinessHours($id, $employeeID)
    {
        $schedules = EmployeeSchedule::where('employee_id', $employeeID)->where('branch_id', $id)->get();
        return response()->json($schedules);
    }

}
