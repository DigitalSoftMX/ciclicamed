<?php

namespace App\Http\Controllers\Branch;

use App\Http\Controllers\Controller;
use App\Http\Requests\Branch\BranchRequest;
use App\Models\Branch\Branch;
use App\Models\Employee\EmployeeSchedule;
use App\Models\Employee\EmployeeStatus;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\MedicalSpecialty;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BranchController extends Controller
{
    public function updateBranch(BranchRequest $request, $id)
    {
        $request->validated();
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            Branch::findOrFail($id)->update([
                'name' => $request['branch.name'],
                'address' => $request['branch.address'],
                'phone' => $request['branch.phone']
            ]);

            return response()->json(true, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function createBranch(BranchRequest $request)
    {
        $request->validated();
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            Branch::create([
                'name' => $request['branch.name'],
                'address' => $request['branch.address'],
                'phone' => $request['branch.phone'],
                'branchstatus_id' => 1
            ]);

            return response()->json(true, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function enableBranch($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            $data = Branch::findOrFail($id)->update([
                'branchstatus_id' => 1
            ]);

            return response()->json($data, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function disableBranch($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            $data = Branch::findOrFail($id)->update([
                'branchstatus_id' => 2
            ]);

            return response()->json($data, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getBranchesAdmin(Request $request)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            $branches = [];
            if($request->has('query'))
            {
                $query = $request->input('query');
                $branches = Branch::where('name', 'like', '%'.$query.'%')->orWhere('address', 'like', '%'.$query.'%')->orWhere('phone', 'like', '%'.$query.'%')->paginate();
            } else {
                $branches = Branch::paginate();
            }
            
            $response = [
                'pagination' => [
                    'total' => $branches->total(),
                    'per_page' => $branches->perPage(),
                    'current_page' => $branches->currentPage(),
                    'last_page' => $branches->lastPage(),
                    'from' => $branches->firstItem(),
                    'to' => $branches->lastItem()
                ],
                'data' => $branches->getCollection()->load('status')
            ];

            return response()->json($response);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getBranchSchedules($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole(['Enfermera', 'Administrador']))
        {
            $schedules = MedicalConsult::where('branch_id', $id)
            ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'assistant_start_at' , 'assistant_finish_at', 'nurse_start_at' , 'nurse_finish_at', 'branch_id', 'doctor_id',  'medicalspecialty_id', 'medicalconsultcategory_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason'])
            ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name', 'patient');
            return response()->json($schedules);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getAllBranches()
    {
        $branches = Branch::where('branchstatus_id', 1)->get();
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
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Paciente') || ($user->hasRole('Doctor') && intval($employeeID) !== intval($user['employee']['id'])))
        {
            $schedules = MedicalConsult::where('doctor_id', $employeeID)->where('branch_id', $id)
                                ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'assistant_start_at', 'assistant_finish_at', 'nurse_start_at', 'nurse_finish_at', 'branch_id', 'doctor_id'])
                                ->load('doctor:id,first_name,last_name', 'branch:id,name');
            return response()->json($schedules);
        }
        $schedules = MedicalConsult::where('doctor_id', $employeeID)->where('branch_id', $id)
                                ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'assistant_start_at', 'assistant_finish_at', 'nurse_start_at', 'nurse_finish_at', 'branch_id', 'doctor_id', 'medicalconsultcategory_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason'])
                                ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name', 'status', 'patient');
        //broadcast(new ScheduleEvent($patient));
        return response()->json($schedules);
    }

    public function getBusinessHours($id, $employeeID)
    {
        $schedules = EmployeeSchedule::where('employee_id', $employeeID)->where('branch_id', $id)->get();
        return response()->json($schedules);
    }

}
