<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\User\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class PageController extends Controller
{
    public function showGraficas()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user->hasRole('Administrador'))
        {
            return response()->view('pages.chart', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }

    public function showMedicaments()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user->hasRole('Administrador'))
        {
            return response()->view('pages.medicament', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }

    public function showBranches()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user->hasRole('Administrador'))
        {
            return response()->view('pages.sucursales', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }

    public function showScheduleHours()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user->hasRole(['Doctor', 'Administrador']))
        {
            return response()->view('pages.horarios', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }

    public function showLaboratorio()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user->hasRole('Administrador'))
        {
            return response()->view('pages.laboratorio', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }

    public function showImagenologia()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user->hasRole('Administrador'))
        {
            return response()->view('pages.imagenologia', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }

    public function showCobro()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user->hasRole('Administrador'))
        {
            return response()->view('pages.cobros', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }

    public function showUsers()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user->hasRole('Administrador'))
        {
            // error_log("=====================================================");
            // dd(json_encode($user));
            return response()->view('pages.users', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }

    public function showProductos()
    {
        $user = User::findOrFail(Auth::user()->id);

        if($user->hasRole(['Administrador', 'Asistente']))
        {
            return response()->view('pages.products', [
                'user' => $user->employee->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        return response()->view('errors.404', [], 404);
    }
    /* ANCHOR  Seguir aqui hoy*/
    public function showDashboard()
    {
        $user = User::findOrFail(Auth::user()->id);
        //Usuario es igual paciente
        if($user['usercategory_id'] === 1 && $user->hasRole('Paciente'))
        {
            return response()->view('pages.dashboard', [
                'user' => $user->patient->load('user'),
                'roles' => $user->roles
            ], 200);
        }
        else
        {
            //Usiario diferente de paciente
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

        if($user['usercategory_id'] === 2 && $user->hasRole('Enfermera') || $user->hasRole('Administrador'))
        {
            return response()->view('pages.prescriptions', [
                'user' => $user->employee->load('user'),
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

        if($user['usercategory_id'] === 2 && $user->hasRole(['Enfermera', 'Laboratorio', 'Imagenologia', 'Asistente']) || $user->hasRole('Administrador'))
        {
            return response()->view('pages.test', [
                'user' => $user->employee->load('user'),
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
            // echo '<pre>';
            // var_dump($user);
            // var_dump($user->roles);
            // die();
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
    /**
     * Cunado se inicia una consulta
     * Enfermera, Doctor o Administrador
    **/
    public function showConsulta()
    {
        $cookie = request()->cookie('consult');
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole(['Doctor', 'Enfermera', 'Administrador']))
        {
            if(isset($cookie))
            {
                // return response()->json(['datas'=>$user]);
                $consult = MedicalConsult::findOrFail($cookie);
                if($consult)
                {
                    $start = $consult['consult_schedule_start'];
                    if($user->hasRole('Administrador'))
                    {
                        $specialties = $user->employee->specialties;
                        $user->employee['specialties'] = $specialties;
                        return response()->view('pages.consult', [
                        'user' => $user->employee->load('user'),
                        'roles' => $user->roles,
                        'consultID' => $cookie,
                        'consultSpecialty' => $consult['medicalspecialty_id']
                        ], 200);
                    }
                    if($user->hasRole(['Doctor', 'Enfermera']) && ($consult['medicalconsultstatus_id'] == 7 || $consult['medicalconsultstatus_id'] == 4 )
                        && Carbon::now()->gte(Carbon::parse($start)))
                    {
                        $specialties = $user->employee->specialties;
                        $user->employee['specialties'] = $specialties;
                        return response()->view('pages.consult', [
                        'user' => $user->employee->load('user'),
                        'roles' => $user->roles,
                        'consultID' => $cookie
                        ], 200);
                    }
                    return response()->view('pages.consult', [
                        'roles' => $user->roles,
                    ], 200);
                }

                return response()->view('pages.consult', [
                    'roles' => $user->roles,
                ], 200);
            }
            return response()->view('pages.consult', [
                'roles' => $user->roles,
            ], 200);
        }

        return response()->view('errors.404', [], 404);
    }
}
