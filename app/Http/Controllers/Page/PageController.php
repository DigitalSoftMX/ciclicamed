<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    public function showDashboard()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user['usercategory_id'] === 1 && $user->hasRole('Paciente'))
        {
            return response()->view('pages.dashboard', [
                'user' => $user->patient->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        else
        {
            if($user->hasRole('Administrador'))
            {
                return response()->view('pages.dashboard', [
                    'user' => $user->employee,
                    'roles' => $user->roles
                ], 200);
            }
            else if($user->hasRole('Doctor'))
            {
                return response()->view('pages.dashboard', [
                    'user' => $user->employee,
                    'roles' => $user->roles
                ], 200);
            }
            else if($user->hasRole('Enfermera'))
            {
                return response()->view('pages.dashboard', [
                    'user' => $user->employee,
                    'roles' => $user->roles
                ], 200);
            }
            else if($user->hasRole('Checkup'))
            {
                return response()->view('pages.dashboard', [
                    'user' => $user->employee,
                    'roles' => $user->roles
                ], 200);
            }
            else if($user->hasRole('Caja'))
            {
                return response()->view('pages.dashboard', [
                    'user' => $user->employee,
                    'roles' => $user->roles
                ], 200);
            }
            else if($user->hasRole('Laboratorio'))
            {
                return response()->view('pages.dashboard', [
                    'user' => $user->employee,
                    'roles' => $user->roles
                ], 200);
            }
            else if($user->hasRole('Imagenologia'))
            {
                return response()->view('pages.dashboard', [
                    'user' => $user->employee,
                    'roles' => $user->roles
                ], 200);
            }
            else if($user->hasRole('Asistente'))
            {
                return response()->view('pages.dashboard', [
                    'user' => $user->employee,
                    'roles' => $user->roles
                ], 200);
            }
        }
        return response()->view('error.404', 404);
    }

    public function showPrescriptions()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user['usercategory_id'] === 1 && $user->hasRole('Paciente'))
        {
            return response()->view('pages.prescriptions', [
                'user' => $user->patient->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('error.404', 404);
    }

    public function showProfile()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user['usercategory_id'] === 1 && $user->hasRole('Paciente'))
        {
            return response()->view('pages.profile', [
                'user' => $user->patient->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        else
        {
            if($user->hasRole('Administrador'))
            {
                return response()->view('pages.prescriptions', [
                    'user' => $user->employee,
                    'roles' => $user->roles
                ], 200);
            }
        }
        return response()->view('error.404', 404);
    }
}
