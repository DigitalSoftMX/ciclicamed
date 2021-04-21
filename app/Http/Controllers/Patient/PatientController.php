<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Http\Requests\Patient\PatientUpdateRequest;
use App\Models\Patient\Patient;
use App\Models\User\User;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

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
}
