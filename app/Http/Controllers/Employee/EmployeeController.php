<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Branch\Branch;
use App\Models\Employee\Employee;
use App\Models\Employee\EmployeeSchedule;
use App\Models\Employee\EmployeeStatus;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\MedicalSpecialty;
use Illuminate\Http\Request;

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
        $status = EmployeeStatus::where('name', 'Empleado')->id;
        $branches =  Branch::with(['employees' => function($query) use($status){
            $query->where('employeestatus_id', $status)
            ->whereHas('category', function ($query) {
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

    public function getAllEmployees(Request $request)
    {
        $employee = [];
        if($request->has('query'))
        {
            $query = $request->input('query');
            $employee = Employee::where('id', 'like', '%'.$query.'%')
                    ->orWhere('first_name', 'like', '%'.$query.'%')
                    ->orWhere('last_name', 'like', '%'.$query.'%')
                    ->orWhere('cellphone', 'like', '%'.$query.'%')
                    ->paginate();
        } else {
            $employee = Employee::paginate();
        }
        
        $response = [
            'pagination' => [
                'total' => $employee->total(),
                'per_page' => $employee->perPage(),
                'current_page' => $employee->currentPage(),
                'last_page' => $employee->lastPage(),
                'from' => $employee->firstItem(),
                'to' => $employee->lastItem()
            ],
            'data' => $employee->load('user', 'category', 'status', 'specialties', 'user.status')
        ];
        return response()->json($response);
    }

    public function getSchedules($id, $branch)
    {
        $schedules = MedicalConsult::where('doctor_id', $id)->where('branch_id', $branch)
                                ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'branch_id', 'doctor_id', 'medicalconsulttype_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason'])
                                ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
        //broadcast(new ScheduleEvent($patient));
        return response()->json($schedules);
    }

    public function getBusinessHours($id, $branch)
    {
        $schedules = EmployeeSchedule::where('employee_id', $id)->where('branch_id', $branch)->get();
        return response()->json($schedules);
    }
}
