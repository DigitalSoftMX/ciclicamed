<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Http\Requests\Patient\NewPatientFromAdminRequest;
use App\Http\Requests\Patient\PatientUpdateRequest;
use App\Http\Requests\User\UserUpdatePasswordRequest;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\History\MedicalHistory;
use App\Models\Patient\Patient;
use App\Models\Patient\Preregistration;
use App\Models\Payment\Payment;
use App\Models\Payment\PaymentStatus;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class PatientController extends Controller
{
    public function updateHistory(Request $request, $id)
    {
        $user = User::findOrFail(Auth::user()->id);
        $consult = MedicalConsult::where('patient_id',$id)->get()->last();//Ultimo registro del paciente
        // error_log(json_encode($consult));
        // return response()->json(['datas'=>$user->employee->load('user')]);
        if($user->hasRole(['Doctor','Administrador']))
        {
            // $history = MedicalHistory::where('patient_id', $id)->orderBy('id', 'desc')->get();
            $history = MedicalHistory::where('patient_id', $id)->get()->last();
            if(Empty($history))
            {
                MedicalHistory::create([
                    'patient_id' => $id,
                    'medicalconsult_id' => $consult->id,
                    'data' => json_encode($request->input('historial')),
                    'updated_by' => $user['employee']['id']
                ]);
                return response()->json(true, 200);
            }
            $history->update([
                'data' => json_encode($request->input('historial')),
                'updated_by' => $user['employee']['id']
            ]);
            return response()->json(true, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getHistory($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole(['Doctor', 'Enfermera', 'Administrador']))
        {
            $patient = MedicalHistory::where('patient_id', $id)->orderBy('id', 'desc')->first();
            if(isset($patient))
            {
                $patient['data'] = json_decode($patient['data']);
                return response()->json($patient);
            }
            return response()->json([], 200);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function deletePatient($id)
    {
        $user = Patient::destroy($id);
        return response()->json($user);
    }

    public function createPatient(NewPatientFromAdminRequest $request)
    {
        $request->validated();
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            $user = User::create([
                'email' => $request->input('email'),
                'password' => Hash::make('paciente'),
                'userstatus_id' => 1,
                'usercategory_id' => 1
            ]);

            $user->assignRole('Paciente');//campo name de la table role

            $preregistration = Preregistration::create([
                'data' => null,
                'user_id' => $user->id
            ]);

            $file = $request->file('photo');
            $photo = basename($file->store('user'));

            $patient = Patient::create([
                'patient_code' => $request->input('patient_code'),
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'gender' => $request->input('gender'),
                'birthday' => $request->input('birthday'),
                'address' => $request->input('address'),
                'phone' => $request->input('phone'),
                'cellphone' => $request->input('cellphone'),
                'photo' => $photo,
                'preregistration_id' => $preregistration->id
            ]);

            return response()->json($patient);

        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getAllPatients()
    {
        $patient = User::findOrFail(Auth::user()->id)->hasRole('Paciente');
        if(!$patient)
        {
            $patients = Patient::get(['id', 'first_name', 'last_name', 'patient_code']);
            // dd($patient);
            return response()->json($patients);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function updatePatient(PatientUpdateRequest $request, $id)
    {
        $request->validated();
        $patient = Patient::findOrFail($id)->load('user');
        $user = User::findOrFail(Auth::user()->id);
        if(($patient->user->id === Auth::user()->id && $user->hasRole('Paciente')) || $user->hasRole('Administrador'))
        {
            $file = $request->file('photo');
            if($file)
            {
                if(file_exists('app/user/'.$patient->photo))
                {
                    unlink(storage_path('app/user/'.$patient->photo));
                }
                $photo = basename($file->store('user'));
            } else {
                $photo = $patient->photo;
            }
            $patient->update([
                'patient_code' => $request->input('patient_code'),
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'gender' => $request->input('gender'),
                'birthday' => $request->input('birthday'),
                'address' => $request->input('address'),
                'phone' => $request->input('phone'),
                'cellphone' => $request->input('cellphone'),
                'photo' => $photo,
            ]);
            User::findOrFail($patient['user']['id'])->update([
                'email' => $request->input('email')
            ]);
            return response()->json($patient->load('user'));
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function showMedicalPrescriptions(Request $request, $id)
    {
        $user = User::findOrFail(Auth::user()->id)->hasRole(['Administrador', 'Paciente']);
        if($user)
        {
            $consult = MedicalConsult::where('patient_id', $id)->Has('prescriptions')->orderBy('consult_schedule_start', 'desc')->paginate();

            $prescriptions = [];
            if($request->has('query'))
            {
                $query = $request->input('query');
                $prescriptions = $consult->whereDate('consult_schedule_start', '>=', $query)->whereDate('consult_schedule_start', '<=', $query)
                        ->paginate()->load('prescriptions.medicament');
            } else {
                $prescriptions = $consult;
            }

            $response = [
                'pagination' => [
                    'total' => $prescriptions->total(),
                    'per_page' => $prescriptions->perPage(),
                    'current_page' => $prescriptions->currentPage(),
                    'last_page' => $prescriptions->lastPage(),
                    'from' => $prescriptions->firstItem(),
                    'to' => $prescriptions->lastItem()
                ],
                'data' => $prescriptions->load('prescriptions.medicament')
            ];

            return response()->json($response);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function showMedicalTests(Request $request, $id)
    {
        $user = User::findOrFail(Auth::user()->id)->hasRole(['Administrador', 'Paciente']);
        if($user)
        {
            $consult = MedicalConsult::where('patient_id', $id)->Has('testScheduled')->orderBy('consult_schedule_start', 'desc')->paginate();

            $prescriptions = [];
            if($request->has('query'))
            {
                $query = $request->input('query');
                $prescriptions = $consult->whereDate('consult_schedule_start', '>=', $query)->whereDate('consult_schedule_start', '<=', $query)
                        ->paginate()->load('prescriptions.medicament');
            } else {
                $prescriptions = $consult;
            }

            $response = [
                'pagination' => [
                    'total' => $prescriptions->total(),
                    'per_page' => $prescriptions->perPage(),
                    'current_page' => $prescriptions->currentPage(),
                    'last_page' => $prescriptions->lastPage(),
                    'from' => $prescriptions->firstItem(),
                    'to' => $prescriptions->lastItem()
                ],
                'data' => $prescriptions->load('status', 'testScheduled.order', 'testScheduled.result', 'testScheduled.order.product', 'testScheduled.status', 'testScheduled.order.product.orderAnnotations')
            ];

            foreach($prescriptions as $result)
            {
                if(!is_null($result->testScheduled->result))
                {
                    if(!is_null($result->testScheduled->result->results))
                    {
                        $result->testScheduled->result['results'] = json_decode($result->testScheduled->result->results);
                    }
                    if(isset($result->testScheduled->result->results->form))
                    {
                        $data = json_decode($result->testScheduled->result->results->form);
                        $result->testScheduled->result->results->form = $data;
                    }
                }
            }

            return response()->json($response);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getAllConsults($id, $categoria)
    {
        $consults = MedicalConsult::where('patient_id', $id)->where(function($item) use($categoria) {
            $item->where('medicalspecialty_id', $categoria)
            ->orWhere('medicalconsultcategory_id', 1);
        })->where('medicalconsultstatus_id', 5)->get();
        return response()->json($consults);
    }

    public function getPatientByID($id)
    {
        $patient = Patient::findOrFail($id)->load('user');
        return response()->json($patient);
    }

    public function getSchedules($id)
    {
        $patient = MedicalConsult::where('patient_id', '=', $id)
                                ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'branch_id', 'doctor_id', 'medicalconsultcategory_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason','medicalspecialty_id'])
                                ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
        //broadcast(new ScheduleEvent($patient));
        return response()->json($patient);
    }

    public function getPatientsWithDebts(Request $request)
    {
        $status = PaymentStatus::where('name', 'Deuda')->first()->id;
        $payment = Patient::whereHas('payments', function($query) use($status) {
            $query->where('paymentstatus_id', $status);
        });

        $prescriptions = [];
        if($request->has('query'))
        {
            $query = $request->input('query');
            $prescriptions = $payment
            ->where(function ($item) use ($query){
                $item->where('first_name', 'like', '%'.$query.'%')
                ->orWhere('last_name', 'like', '%'.$query.'%')
                ->orWhere('patient_code', 'like', '%'.$query.'%');
            })
            ->paginate();
        } else {
            $prescriptions = $payment->paginate();
        }

        $response = [
            'pagination' => [
                'total' => $prescriptions->total(),
                'per_page' => $prescriptions->perPage(),
                'current_page' => $prescriptions->currentPage(),
                'last_page' => $prescriptions->lastPage(),
                'from' => $prescriptions->firstItem(),
                'to' => $prescriptions->lastItem()
            ],
            'data' => $prescriptions->getCollection()->load('user:email')
        ];

        return response()->json($response);
    }

    public function getPatientDebts($idPatient)
    {
        $status = PaymentStatus::where('name', 'Deuda')->first()->id;
        $debts = Payment::where('patient_id', $idPatient)->where('paymentstatus_id', $status)->paginate();
        $response = [
            'pagination' => [
                'total' => $debts->total(),
                'per_page' => $debts->perPage(),
                'current_page' => $debts->currentPage(),
                'last_page' => $debts->lastPage(),
                'from' => $debts->firstItem(),
                'to' => $debts->lastItem()
            ],
            'data' => $debts->load('debts', 'products')
        ];

        return response()->json($response);
    }

    public function getPreregistration($id)
    {
        error_log('getPreregistration');
        $patient = Patient::findOrFail($id);
        $patient->preregistration->data = json_decode($patient->preregistration->data);
        error_log(json_encode($patient->preregistration->data));
        return response()->json($patient->preregistration, 200);
    }
}
