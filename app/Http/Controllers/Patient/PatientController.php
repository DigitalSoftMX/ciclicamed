<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Http\Requests\Patient\PatientUpdateRequest;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Patient\Patient;
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function showMedicalPrescriptions($id)
    {
        $patient = User::findOrFail($id)->patient->prescriptions
                                                 ->load('medicament:id,name', 'medicalconsult:id,consult_schedule_start')
                                                 ->groupBy('medicalconsult_id');

        return view('patient.medical-prescription', [
            'prescriptions' => $patient
        ]);
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
        $consults = Patient::findOrFail($id)->medicalConsults->where('medicalconsulttype_id', $categoria);
        return response()->json($consults);
    }

    public function show($id)
    {
        $patient = Patient::findOrFail($id);
        return response()->json($patient);
    }

    public function getSchedules($id)
    {
        $patient = MedicalConsult::where('patient_id', '=', $id)
                                ->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'branch_id', 'doctor_id', 'medicalconsulttype_id', 'medicalconsultstatus_id', 'patient_id', 'consult_reason'])
                                ->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
        //broadcast(new ScheduleEvent($patient));
        return response()->json($patient);
    }
}
