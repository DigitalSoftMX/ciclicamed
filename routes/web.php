<?php

use App\Events\Schedule\ScheduleEvent;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Patient\PatientController;
use App\Http\Controllers\Schedule\ScheduleController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Intervention\Image\ImageManagerStatic as Image;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Auth::routes();
Route::get('/', [LoginController::class, 'loginForm'])->name('login.login');

Route::group(['middleware' => 'auth'], function() {
    // Route::resource('usuarios', UserController::class);
    Route::resource('pacientes', PatientController::class);


    Route::group(['prefix' => 'usuarios'], function() {
        Route::get('/{id}/perfil', [UserController::class, 'show'])->name('usuarios.show');
        Route::get('/{id}/recetas', [PatientController::class, 'showMedicalPrescriptions'])->name('usuarios.medicalPrescription');
        Route::get('/{id}/estudios', [PatientController::class, 'showMedicalTests'])->name('usuarios.medicalTest');
        Route::patch('/{id}/password', [UserController::class, 'updatePassword'])->name('usuarios.password');
    });

    Route::group(['prefix' => 'agenda'], function() {
        Route::get('/paciente/{id}', [ScheduleController::class, 'showPatientSchedule'])->name('agenda.paciente');
    });


    Route::get('test/{id}', function() {
        return view('test');
    } );

    
    Route::get('/images/users/{id}', function ($id) {
        $storage = storage_path('app/user/patient/photo/'.$id.'');
        return file_exists($storage) ? Image::make($storage)->response() : response()->view('errors.404',[], 404);
    });
});
