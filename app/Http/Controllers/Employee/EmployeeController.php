<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Http\Requests\employee\employeeUpdateRequest;
use App\Http\Requests\Patient\PatientUpdateRequest;
use App\Models\Branch\Branch;
use App\Models\Employee\Employee;
use App\Models\Employee\EmployeeSchedule;
use App\Models\Employee\EmployeeStatus;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\MedicalSpecialty;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    public function getAllSchedules()
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole(['Asistente', 'Enfermera', 'Administrador']))
        {
            $schedules = MedicalConsult::all(['id', 'consult_schedule_start', 'consult_schedule_finish', 'assistant_start_at' , 'assistant_finish_at', 'nurse_start_at' , 'nurse_finish_at', 'branch_id', 'doctor_id',  'medicalspecialty_id', 'medicalconsultcategory_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason'])
            ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
            return response()->json($schedules);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getEmployeeSchedules($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if(!$user->hasRole(['Paciente', 'Caja']))
        {
            $schedules = MedicalConsult::where('doctor_id', $id)
            ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'assistant_start_at' , 'assistant_finish_at', 'nurse_start_at' , 'nurse_finish_at', 'branch_id', 'doctor_id',  'medicalspecialty_id', 'medicalconsultcategory_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason'])
            ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
            return response()->json($schedules);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getDoctors()
    {
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

    public function updateEmployee(PatientUpdateRequest $request, $id)
    {
        $request->validated();
        $employee = Employee::findOrFail($id)->load('user');
        $user = User::findOrFail(Auth::user()->id);
        if(($employee->user->id === Auth::user()->id && !$user->hasRole('Paciente')) || $user->hasRole('Administrador'))
        {
            $file = $request->file('photo');
            if($file)
            {
                if(file_exists('app/user/'.$employee->photo))
                {
                    unlink(storage_path('app/user/'.$employee->photo));
                }
                $photo = basename($file->store('user'));
            } else {
                $photo = $employee->photo;
            }
            $employee->update([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'gender' => $request->input('gender'),
                'birthday' => $request->input('birthday'),
                'address' => $request->input('address'),
                'phone' => $request->input('phone'),
                'cellphone' => $request->input('cellphone'),
                'photo' => $photo,
            ]);
            User::findOrFail($id)->update([
                'email' => $request->input('email')
            ]);
            return response()->json($employee->load('user'));
        }
        
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getEmployeeBranches($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        
        if(!$user->hasRole('Paciente', 'Caja'))
        {
            DB::statement("SET SQL_MODE=''");
            $employee = EmployeeSchedule::where('employee_id', $id)->groupBy('branch_id', 'employee_id')->get()->load('branch');
            return response()->json($employee);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }
}
