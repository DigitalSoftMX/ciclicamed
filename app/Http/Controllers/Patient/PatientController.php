<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Http\Requests\Patient\PatientUpdateRequest;
use App\Http\Requests\User\UserUpdatePasswordRequest;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Patient\Patient;
use App\Models\Payment\Payment;
use App\Models\Payment\PaymentStatus;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class PatientController extends Controller
{

    public function getAllPatients()
    {
        $patient = User::findOrFail(Auth::user()->id)->hasRole('Paciente');
        if(!$patient)
        {
            $patients = Patient::get(['id', 'first_name', 'last_name', 'patient_code']);
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
        if($patient->user->id === Auth::user()->id && ($user->hasRole('Paciente') || $user->hasRole('Administrador')))
        {
            $file = $request->file('photo');
            if($file)
            {
                unlink(storage_path('app/user/'.$patient->photo));
                $photo = basename($file->store('user'));
            } else {
                $photo = $patient->photo;
            }
            $patient->update([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'gender' => $request->input('gender'),
                'birthday' => $request->input('birthday'),
                'address' => $request->input('address'),
                'phone' => $request->input('phone'),
                'cellphone' => $request->input('cellphone'),
                'photo' => $photo,
            ]);
            User::findOrFail(Auth::user()->id)->update([
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
            $consult = MedicalConsult::where('patient_id', $id)->Has('prescriptions')->paginate();

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
            $consult = MedicalConsult::where('patient_id', $id)->Has('testScheduled')->paginate();

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
                'data' => $prescriptions->load('status', 'testScheduled.order', 'testScheduled.result', 'testScheduled.order.product')
            ];

            return response()->json($response);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getAllConsults($id, $categoria)
    {
        $consults = Patient::findOrFail($id)->medicalConsults->where('medicalconsultcategory_id', $categoria);
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
                                ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'branch_id', 'doctor_id', 'medicalconsultcategory_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason'])
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
            $prescriptions = $payment->where('first_name', 'like', '%'.$query.'%')
                    ->orWhere('last_name', 'like', '%'.$query.'%')
                    ->orWhere('patient_code', 'like', '%'.$query.'%')
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
            'data' => $prescriptions->getCollection()
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
            'data' => $debts->load('lastDebtPayment', 'products')
        ];

        return response()->json($response);
    }

    public function updatePassword(UserUpdatePasswordRequest $request, $id)
    {
        $request->validated();
        $user = User::findOrFail($id);
        $user['password'] = Hash::make($request['password']);
        $user->save();
        return response()->json($user);
    }
}
