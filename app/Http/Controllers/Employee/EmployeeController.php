<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Branch\Branch;
use App\Models\Medical\MedicalSpecialty;

class EmployeeController extends Controller
{
    public function getDoctors()
    {
//        $branches = EmployeeSchedule::select('branch_id', 'branches.name as branchName', 'employee_id', 'employees.first_name', 'employees.last_name', 'employee_categories.name')
//            ->join('branches', 'branches.id', '=', 'employee_schedules.branch_id')
//            ->join('employees', 'employees.id', '=', 'employee_schedules.employee_id')
//            ->join('employee_categories', 'employee_categories.id', '=', 'employees.employeecategory_id')
//            ->where('employee_categories.name', 'Doctor')
//            ->groupBy('branch_id', 'employee_id')
//            ->orderBy('branch_id', 'ASC')
//            ->get();

        $branches =  Branch::with(['employees' => function($query){
            $query->whereHas('category', function ($query) {
                $query->where('name', 'Doctor');
            })->groupBy('branch_id', 'employee_id')->without(['pivot'])->get(['employees.id', 'employees.first_name', 'employees.last_name']);
        }])
            ->get(['branches.id', 'branches.name']);
        return response()->json($branches);
    }

    public function getDoctorConsult($doctorID, $consultID)
    {
        return view('errors.401');
    }
}
