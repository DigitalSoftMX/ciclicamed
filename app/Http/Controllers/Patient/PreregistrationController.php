<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Models\Patient\Preregistration;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PreregistrationController extends Controller
{
    public function updatePreregistration(Request $request, $id)
    {
        // return response()->json(['datas' => $request->input('data')], 200);
        $user = User::findOrFail(Auth::user()->id)->hasRole(['Administrador', 'Paciente', 'Doctor']);
        if($user)
        {
            $preregistration = Preregistration::where('id', $id)->first();
            // error_log(json_encode($request->input('data.data')));
            $preregistration->update(
                [
                    'data'=>$request->input('data.data'),
                ]
            );
            return response()->json($preregistration,200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }
}
