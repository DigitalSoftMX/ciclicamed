<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Http\Requests\Patient\PatientUpdateRequest;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Patient\Patient;
use App\Models\Payment\Payment;
use App\Models\Payment\PaymentStatus;
use App\Models\User\User;
use Illuminate\Http\Request;

class PatientController extends Controller
{

    public function getAllPatients()
    {
        $patients = Patient::get(['id', 'first_name', 'last_name', 'patient_code']);
        return response()->json($patients);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PatientUpdateRequest $request, $id)
    {
        $request->validated();
        $patient = Patient::findOrFail($id);
        $patient->update($request->input('data'));
        return $patient;
    }

    public function showMedicalPrescriptions(Request $request, $id)
    {
        // $patientsDebt = [];
        // if($request->has('query'))
        // {
        //     $query = $request->input('query');
        //     $patientsDebt = $payment->where('first_name', 'like', '%'.$query.'%')
        //             ->orWhere('last_name', 'like', '%'.$query.'%')
        //             ->orWhere('patient_code', 'like', '%'.$query.'%')
        //             ->paginate();
        // } else {
        //     $patientsDebt = $payment->paginate();
        // }
        
        // $response = [
        //     'pagination' => [
        //         'total' => $patientsDebt->total(),
        //         'per_page' => $patientsDebt->perPage(),
        //         'current_page' => $patientsDebt->currentPage(),
        //         'last_page' => $patientsDebt->lastPage(),
        //         'from' => $patientsDebt->firstItem(),
        //         'to' => $patientsDebt->lastItem()
        //     ],
        //     'data' => $patientsDebt->getCollection()
        // ];

        $patient = MedicalConsult::where('patient_id', $id)->Has('prescriptions')->paginate()->load('prescriptions');

        return response()->json($patient);
    }

    public function showMedicalTests($id)
    {
        $tests = User::findOrFail($id)->patient->medicaltestsscheduled->load('status');

        foreach($tests as $test)
        {
            $test->medicalorders->load('product:id,name');
        }
        return view('patient.medical-test', [
            'medicaltest' => $tests
        ]);
    }

    public function getAllConsults($id, $categoria)
    {
        $consults = Patient::findOrFail($id)->medicalConsults->where('medicalconsultcategory_id', $categoria);
        return response()->json($consults);
    }

    public function getPatientByID($id)
    {
        $patient = Patient::findOrFail($id);
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

        $patientsDebt = [];
        if($request->has('query'))
        {
            $query = $request->input('query');
            $patientsDebt = $payment->where('first_name', 'like', '%'.$query.'%')
                    ->orWhere('last_name', 'like', '%'.$query.'%')
                    ->orWhere('patient_code', 'like', '%'.$query.'%')
                    ->paginate();
        } else {
            $patientsDebt = $payment->paginate();
        }
        
        $response = [
            'pagination' => [
                'total' => $patientsDebt->total(),
                'per_page' => $patientsDebt->perPage(),
                'current_page' => $patientsDebt->currentPage(),
                'last_page' => $patientsDebt->lastPage(),
                'from' => $patientsDebt->firstItem(),
                'to' => $patientsDebt->lastItem()
            ],
            'data' => $patientsDebt->getCollection()
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
}
