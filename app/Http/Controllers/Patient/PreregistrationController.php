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
        $user = User::findOrFail(Auth::user()->id)->hasRole(['Administrador', 'Paciente', 'Doctor']);
        if($user)
        {
            $preregistration = Preregistration::where('user_id', $id)->first();
            $preregistration->update($request->input('data'));
            return response()->json($preregistration);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }
}
