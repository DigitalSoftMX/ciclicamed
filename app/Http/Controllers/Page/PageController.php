<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\User\User;
use Carbon\Carbon;
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
            return response()->view('pages.dashboard', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
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
        return response()->view('errors.404', [], 404);
    }

    public function showTests()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user['usercategory_id'] === 1 && $user->hasRole('Paciente'))
        {
            return response()->view('pages.test', [
                'user' => $user->patient->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
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
            return response()->view('pages.profile', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }

    public function showCheckup()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user['usercategory_id'] === 2 && $user->hasRole('Checkup') || $user->hasRole('Administrador'))
        {
            return response()->view('pages.checkup', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }

    public function showProducts()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user['usercategory_id'] === 2 && $user->hasRole('Asistente') || $user->hasRole('Administrador'))
        {
            return response()->view('pages.products', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }

    public function showConsulta()
    {
        
        $cookie = request()->cookie('consult');
        $consult= MedicalConsult::findOrFail($cookie);
        if($cookie && $consult)
        {
            
            $user = User::findOrFail(Auth::user()->id);
            $start = $consult['consult_schedule_start'];
            //Modificar < por >
            if($user->hasRole('Doctor') && $consult['medicalconsultstatus_id'] > 3 && Carbon::now()->gte(Carbon::parse($start)))
            {
                return response()->view('pages.consult', [
                    'user' => $user->employee->load('user'),
                    'roles' => $user->roles,
                    'consultID' => $cookie
                ], 200);
            }
            else if($user->hasRole('Administrador'))
            {
                return response()->view('pages.consult', [
                    'user' => $user->employee->load('user'),
                    'roles' => $user->roles,
                    'consultID' => $cookie
                ], 200);
            }
            else
            {
                return response()->view('errors.404', [], 404);
            }
        }
        return response()->view('errors.404', [], 404);
    }
}
