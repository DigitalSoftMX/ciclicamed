<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\ChartController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ComponentController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EcommerceController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ErrorController;
use App\Http\Controllers\FirestoreController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\GoogleLoginController;
use App\Http\Controllers\IconController;
use App\Http\Controllers\ImportExportController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Patient\PatientController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\Schedule\ScheduleController;
use App\Http\Controllers\SocialAppController;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\ToDoController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\WidgetController;
use App\Http\Controllers\WizardController;
use App\Models\User\User;
use Illuminate\Console\Scheduling\Schedule;
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

    Route::group(['prefix' => 'paciente'], function() {
        Route::get('/{id}/agenda', [ScheduleController::class, 'showPatientSchedule'])->name('agenda.paciente');
    });


    Route::get('test', fn() => view('test'));

    
    Route::get('/images/users/{id}', function ($id) {
        $storage = storage_path('app/user/patient/photo/'.$id.'');
        return file_exists($storage) ? Image::make($storage)->response() : response()->view('errors.404',[], 404);
    });
});
