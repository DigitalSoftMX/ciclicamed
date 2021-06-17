<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserUpdatePasswordRequest;
use App\Http\Requests\User\UserUpdateRequest;
use App\Models\Patient\Patient;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $userCategory = User::findOrFail($id)->category;
        $user = $userCategory->name === 'Paciente' ? User::findOrFail($id)->patient : User::findOrFail($id)->employee;
        return view('user.user-profile', [
            'user' => $user,
            'category' => $userCategory
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response([
            'user' => User::findOrFail($id)
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateRequest $request, $id)
    {
        $request->validated();
        $user = User::findOrFail($id);
        $user->update($request->all());
        $user['password'] = Hash::make($request['password']);
        $user->save();
        return $user;
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

    public function updatePassword(UserUpdatePasswordRequest $request, $id)
    {
        $request->validated();
        $user = User::findOrFail($id);
        $user['password'] = Hash::make($request['password']);
        $user->save();
        return $user;
    }

    public function getPatientsTable(Request $request)
    {
        $patient = [];
        if($request->has('query'))
        {
            $query = $request->input('query');
            $patient = Patient::where('patient_code', 'like', '%'.$query.'%')
                    ->orWhere('first_name', 'like', '%'.$query.'%')
                    ->orWhere('last_name', 'like', '%'.$query.'%')
                    ->orWhere('cellphone', 'like', '%'.$query.'%')
                    ->paginate();
        } else {
            $patient = Patient::paginate();
        }
        
        $response = [
            'pagination' => [
                'total' => $patient->total(),
                'per_page' => $patient->perPage(),
                'current_page' => $patient->currentPage(),
                'last_page' => $patient->lastPage(),
                'from' => $patient->firstItem(),
                'to' => $patient->lastItem()
            ],
            'data' => $patient->load('preregistration')
        ];
        foreach($patient as $patientData)
        {
            $patientData->preregistration->data = json_decode($patientData->preregistration->data);
        }
        return response()->json($response);
    }
}
