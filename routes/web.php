<?php

use App\Events\Schedule\ScheduleEvent;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Branch\BranchController;
use App\Http\Controllers\Employee\EmployeeController;
use App\Http\Controllers\Medical\Consult\MedicalConsultController;
use App\Http\Controllers\Medical\Test\MedicalTestResultController;
use App\Http\Controllers\Patient\PatientController;
use App\Http\Controllers\Patient\PreregistrationController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Schedule\ScheduleController;
use App\Http\Controllers\User\UserController;
use App\Models\Employee\Employee;
use App\Models\Patient\Patient;
use App\Models\Patient\Preregistration;
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

    // Vistas
    Route::get('test/{id}', function() {
        return view('test');
    } );

    Route::get('agenda', function() {
        return view('agenda');
    } );


    // Route::resource('usuarios', UserController::class);
    Route::resource('pacientes', PatientController::class);

    // Usuarios
    Route::group(['prefix' => 'usuarios'], function() {
        Route::get('/{id}/perfil', [UserController::class, 'show'])->name('usuarios.show');
        Route::get('/{id}/recetas', [PatientController::class, 'showMedicalPrescriptions'])->name('usuarios.medicalPrescription');
        Route::get('/{id}/estudios', [PatientController::class, 'showMedicalTests'])->name('usuarios.medicalTest');
        Route::patch('/{id}/password', [UserController::class, 'updatePassword'])->name('usuarios.password');

        Route::get('/pacientes', [UserController::class, 'getPatientsTable'])->name('usuarios.pacientes'); //NOTA PASAR A GRUPO PACIENTES
    });

    // Consultas
    Route::group(['prefix' => 'consultas'], function() {
        Route::post('/', [MedicalConsultController::class, 'store'])->name('consulta.nueva');
        Route::get('/categorias', [MedicalConsultController::class, 'getConsultTypes'])->name('consulta.categorias');
        Route::delete('/{id}', [MedicalConsultController::class, 'cancelConsult'])->name('consulta.eliminar');
        Route::patch('/{id}', [MedicalConsultController::class, 'updateSchedule'])->name('consulta.actualizar');
        
        
        Route::get('/{id}/seguimiento', [MedicalConsultController::class, 'getFollowUps'])->name('consulta.seguimiento');
        Route::get('/{id}/receta', [MedicalConsultController::class, 'getPrescriptions'])->name('consulta.receta');
        Route::get('/{id}', [MedicalConsultController::class, 'getConsultInfo'])->name('consulta.informacion');
        Route::get('/{id}/historial', [MedicalConsultController::class, 'getHistory'])->name('consulta.informacion');
        Route::get('/{id}/doctor', [MedicalConsultController::class, 'getDoctor'])->name('consulta.doctor');

        Route::get('/{id}/estudios', [MedicalConsultController::class, 'getTests'])->name('consulta.estudio.obtener');
        Route::post('/{id}/estudios', [MedicalConsultController::class, 'createTest'])->name('consulta.estudio.crear');
    });

    
    //Imagenes
    Route::get('/images/users/{id}', function ($id) {
        $storage = storage_path('app/user/patient/photo/'.$id.'');
        return file_exists($storage) ? Image::make($storage)->response() : response()->view('errors.404',[], 404);
    });


    //Sucursales
    Route::group(['prefix' => 'sucursales'], function() {
        Route::get('/', [BranchController::class, 'getAllBranches'])->name('sucursal.sucursales');
        Route::get('/{id}/especialidades/doctores', [BranchController::class, 'getDoctorsAllSpecialties'])->name('sucursal.especialidades');
        Route::get('/{id}/empleados/{employeeID}/agenda', [BranchController::class, 'getSchedules'])->name('sucursales.empleados.agenda');
        Route::get('/{id}/empleados/{employeeID}/horarios', [BranchController::class, 'getBusinessHours'])->name('sucursales.empleados.horarios');
    });


    //Pacientes
    Route::group(['prefix' => 'pacientes'], function() {
        Route::get('/', [PatientController::class, 'getAllPatients'])->name('pacientes.todos');
        Route::get('/{id}', [PatientController::class, 'getPatientByID'])->name('pacientes.paciente');
        Route::get('/{id}/consultas/categoria/{categoria}', [PatientController::class, 'getAllConsults'])->name('pacientes.categoria');
        Route::get('/{id}/agenda', [PatientController::class, 'getSchedules'])->name('pacientes.agenda');

        Route::patch('/{id}/preregistro', [PreregistrationController::class, 'updatePreregistration'])->name('pacientes.preregistro');
    });

    //Empleados
    Route::group(['prefix' => 'empleados'], function() {
        Route::get('/', [EmployeeController::class, 'getAllEmployees'])->name('empleados.todos');
        Route::get('/{idDoctor}/consulta/{idConsult}', [EmployeeController::class, 'getDoctorConsult'])->name('doctores.consulta');
    });

    //Productos
    Route::group(['prefix' => 'productos'], function() {
        Route::get('/medicamentos', [ProductController::class, 'getMedicaments'])->name('productos.medicamentos');
        Route::get('/estudios', [ProductController::class, 'getTestOrderProducts'])->name('productos.estudios');

        Route::get('/consulta', [ProductController::class, 'getConsulta'])->name('productos.consulta');
        Route::get('/cirugia', [ProductController::class, 'getCirugia'])->name('productos.cirugia');
        Route::get('/histeroscopia', [ProductController::class, 'getHisteroscopia'])->name('productos.histeroscopia');
        Route::get('/ciclica', [ProductController::class, 'getCiclica'])->name('productos.ciclica');
        Route::get('/imagenologia', [ProductController::class, 'getImagenologia'])->name('productos.imagenologia');
        Route::get('/laboratorio', [ProductController::class, 'getLaboratorio'])->name('productos.laboratorio');
        Route::get('/farmacia', [ProductController::class, 'getFarmacia'])->name('productos.farmacia');

        Route::post('/', [ProductController::class, 'createProduct'])->name('productos.nuevo');
        Route::patch('/{id}', [ProductController::class, 'updateProduct'])->name('productos.actualizar');
        Route::delete('/{id}', [ProductController::class, 'deleteProduct'])->name('productos.eliminar');
    });

    //Estudios
    Route::group(['prefix' => 'estudios'], function() {
        Route::get('/resultados/{id}', [MedicalTestResultController::class, 'getResultFile'])->name('estudios.resultados');
        Route::get('/{id}/resultados/', [MedicalTestResultController::class, 'testResult'])->name('estudios.resultados');
        
        Route::post('/{id}/resultados', [MedicalTestResultController::class, 'testResult'])->name('estudios.resultados');
        
    });
});
