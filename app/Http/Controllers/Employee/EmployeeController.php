<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Http\Requests\Employee\EmployeeDegreeRequest;
use App\Http\Requests\Employee\EmployeeHoursRequest;
use App\Http\Requests\employee\employeeUpdateRequest;
use App\Http\Requests\Employee\NewEmployeeRequest;
use App\Http\Requests\Employee\RoleRequest;
use App\Http\Requests\Patient\NewPatientFromAdminRequest;
use App\Http\Requests\Patient\PatientUpdateRequest;
use App\Models\Branch\Branch;
use App\Models\Employee\Employee;
use App\Models\Employee\EmployeeLicense;
use App\Models\Employee\EmployeeSchedule;
use App\Models\Employee\EmployeeStatus;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\MedicalSpecialty;
use App\Models\Patient\Patient;
use App\Models\Patient\Preregistration;
use App\Models\User\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class EmployeeController extends Controller
{
    public function setHours(EmployeeHoursRequest $request, $id)
    {
        if(intval($id) <= 0)
        {
            return response()->json(['errors' => [
                'doctor' => ['Debe de seleccionar un doctor']
            ]], 401);
        }

        $request->validated();
        $user = User::findOrFail(Auth::user()->id);
        if(intval($user['employee']['id']) === intval($id) || $user->hasRole('Administrador'))
        {
            EmployeeSchedule::where('employee_id', $id)->delete();

            foreach($request['hours'] as $hour)
            {
                EmployeeSchedule::create([
                    'employee_id' => $id,
                    'start_day' => $hour['start_day'],
                    'start_time' => $hour['start_time'],
                    'finish_day' => $hour['finish_day'],
                    'finish_time' => $hour['finish_time'],
                    'branch_id' => $hour['branch_id'],
                ]);
            }
            return response()->json(true, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function setTitles(EmployeeDegreeRequest $request, $id)
    {
        if(intval($id) <= 0)
        {
            return response()->json(['errors' => [
                'doctor' => ['Debe de seleccionar un doctor']
            ]], 401);
        }
        
        $request->validated();
        $user = User::findOrFail(Auth::user()->id);
        if(intval($user['employee']['id']) === intval($id) || $user->hasRole('Administrador'))
        {
            EmployeeLicense::where('employee_id', $id)->delete();

            foreach($request['degrees'] as $degree)
            {
                EmployeeLicense::create([
                    'employee_id' => $id,
                    'degree_title' => $degree['degree_title'],
                    'license_number' => $degree['license_number'],
                    'school_name' => $degree['school_name'],
                    'medicalspecialty_id' => $degree['medicalspecialty_id'],
                ]);
            }
            return response()->json(true, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getHours($id)
    {
        $hours = EmployeeSchedule::where('employee_id', $id)->get()->load('branch');
        return response()->json($hours);
    }

    public function getTitles($id)
    {
        $titles = EmployeeLicense::where('employee_id', $id)->get();
        return response()->json($titles);
    }

    public function getSpecialties()
    {
        $specialties = MedicalSpecialty::all();
        return response()->json($specialties);
    }

    public function createEmployee(NewEmployeeRequest $request)
    {        
        $request->validated();
        $roles = json_decode($request->input('roles'));
        if(count($roles) === 0)
        {
            return response()->json(['errors' => [
                'roles' => ['Debe de seleccionar al menos un rol']
            ]], 401);
        }
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            $file = $request->file('photo');
            $photo = basename($file->store('user'));
            $user = User::create([
                'email' => $request->input('email'),
                'email_verified_at' => Carbon::now(),
                'password' => Hash::make('empleado'),
                'userstatus_id' => 1,
                'usercategory_id' => 2,
            ]);

            
            $user->assignRole($roles);

            $employee = Employee::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'gender' => $request->input('gender'),
                'birthday' => $request->input('birthday'),
                'address' => $request->input('address'),
                'phone' => $request->input('phone'),
                'cellphone' => $request->input('cellphone'),
                'photo' => $photo,
                'employeestatus_id' => 1,
                'user_id' => $user->id
            ]);
            return response()->json($employee);
        }
        
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function setEmployeeRoles(RoleRequest $request, $id)
    {
        $request->validated();
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            $employee = Employee::findOrFail($id);
            $employeeID = $employee['user']['id'];
            $userEmployee = User::findOrFail($employeeID);
            $roles = $userEmployee->getRoleNames();
            foreach($roles as $role)
            {
                $userEmployee->removeRole($role);
            }
            $userEmployee->assignRole($request['roles']);
            return response()->json(true, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);

        return response()->json($request['roles']);
    }

    public function getEmployeeRoles($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            $employee = Employee::findOrFail($id);
            $userEmployee = $employee['user']['id'];
            $roles = User::findOrFail($userEmployee)->getRoleNames();
            return response()->json($roles);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getAllRoles()
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            return response()->json(Role::where('name', '!=', 'Paciente')->get());
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function enableEmployee($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            Employee::findOrFail($id)->update([
                'employeestatus_id' => 1
            ]);

            return response()->json(true, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function disableEmployee($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            Employee::findOrFail($id)->update([
                'employeestatus_id' => 2
            ]);

            return response()->json(true, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getAllSchedules()
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole(['Asistente', 'Enfermera', 'Administrador']))
        {
            $schedules = MedicalConsult::all(['id', 'consult_schedule_start', 'consult_schedule_finish', 'assistant_start_at' , 'assistant_finish_at', 'nurse_start_at' , 'nurse_finish_at', 'branch_id', 'doctor_id',  'medicalspecialty_id', 'medicalconsultcategory_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason'])
            ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name', 'patient');
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
            ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name', 'patient');
            return response()->json($schedules);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getDoctors() //Arreglar doctores
    {
        $status = EmployeeStatus::where('name', 'Empleado')->id;
        $branches =  Branch::with(['employees' => function($query) use($status){
            $query->where('employeestatus_id', $status)
            ->with(['user' => function($query) use($status){
                $query->where('role', function($query) {
                    return $query->name === 'Doctor';
                 });
                // ->whereHas('category', function ($query) {
                //     $query->where('name', 'Doctor');
                // })->groupBy('branch_id', 'employee_id')->without(['pivot'])->get(['employees.id', 'employees.first_name', 'employees.last_name']);
            }]);
            // ->whereHas('category', function ($query) {
            //     $query->where('name', 'Doctor');
            // })->groupBy('branch_id', 'employee_id')->without(['pivot'])->get(['employees.id', 'employees.first_name', 'employees.last_name']);
        }])
        ->get(['branches.id', 'branches.name']);
        return response()->json($branches);
    }

    public function getAllEmployees(Request $request)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            $employee = [];
            if($request->has('query'))
            {
                $query = $request->input('query');
                $employee = Employee::where('id' , '!=', 1)->where('id', '!=', 2)
                ->where(function($item) use($query){
                        $item->where('id', 'like', '%'.$query.'%')
                        ->orWhere('first_name', 'like', '%'.$query.'%')
                        ->orWhere('last_name', 'like', '%'.$query.'%')
                        ->orWhere('cellphone', 'like', '%'.$query.'%');
                })
                ->paginate();
            } else {
                $employee = Employee::where('id' , '!=', 1)->where('id', '!=', 2)->paginate();
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
                'data' => $employee->load('user', 'status', 'specialties', 'user.status', 'user.roles:id,name')
            ];
            return response()->json($response);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function updateEmployee(PatientUpdateRequest $request, $id)
    {
        $request->validated();
        $employee = Employee::findOrFail($id)->load('user');
        $user = User::findOrFail(Auth::user()->id);
        if((intval(Auth::user()->id) === intval($id) && !$user->hasRole('Paciente')) || $user->hasRole('Administrador'))
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
            User::findOrFail($employee['user']['id'])->update([
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
