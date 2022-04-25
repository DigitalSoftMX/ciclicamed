<?php

use App\Events\Schedule\ScheduleEvent;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Branch\BranchController;
use App\Http\Controllers\Checkup\CheckupCategoryController;
use App\Http\Controllers\Employee\EmployeeController;
use App\Http\Controllers\Graficos\GraficosController;
use App\Http\Controllers\Medical\Consult\MedicalConsultController;
use App\Http\Controllers\Medical\Test\ImagenologiaTestController;
use App\Http\Controllers\Medical\Test\LaboratorioTestController;
use App\Http\Controllers\Medical\Test\MedicalTestResultController;
use App\Http\Controllers\Page\PageController;
use App\Http\Controllers\Password\PasswordController;
use App\Http\Controllers\Patient\PatientController;
use App\Http\Controllers\Patient\PreregistrationController;
use App\Http\Controllers\Payment\PaymentController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Schedule\ScheduleController;
use App\Http\Controllers\User\UserController;
use App\Models\Employee\Employee;
use App\Models\Patient\Patient;
use App\Models\Patient\Preregistration;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Route;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Http\Request;
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
Route::post('/register', [UserController::class, 'createPatient'])->name('registrar');
Route::get('/restaurar-contrasena', [PasswordController::class, 'showResetPage'])->middleware('guest')->name('restaurar.get');
Route::post('/restaurar-contrasena', [PasswordController::class, 'sendPasswordReset'])->middleware('guest')->name('restaurar.set');

Route::group(['middleware' => 'auth', 'verified'], function() {

    //Paginas
    Route::group(['prefix' => 'app'], function() {
        Route::get('/inicio', [PageController::class, 'showDashboard'])->name('app.dashboard');
        Route::get('/recetas', [PageController::class, 'showPrescriptions'])->name('app.recetas');
        Route::get('/estudios', [PageController::class, 'showTests'])->name('app.estudios');
        Route::get('/perfil', [PageController::class, 'showProfile'])->name('app.perfil');
        Route::get('/checkup', [PageController::class, 'showCheckup'])->name('app.checkup');
        Route::get('/productos', [PageController::class, 'showProducts'])->name('app.productos');
        Route::get('/consulta', [PageController::class, 'showConsulta'])->name('app.consulta');
        Route::get('/productos', [PageController::class, 'showProductos'])->name('app.productos');
        Route::get('/usuarios', [PageController::class, 'showUsers'])->name('app.usuarios');
        Route::get('/cobros', [PageController::class, 'showCobro'])->name('app.cobros');
        Route::get('/imagenologia', [PageController::class, 'showImagenologia'])->name('app.imagenologia');
        Route::get('/laboratorio', [PageController::class, 'showLaboratorio'])->name('app.laboratorio');
        Route::get('/horarios', [PageController::class, 'showScheduleHours'])->name('app.horarios');
        Route::get('/sucursales', [PageController::class, 'showBranches'])->name('app.sucursales');
        Route::get('/medicamentos', [PageController::class, 'showMedicaments'])->name('app.medicamentos');
        Route::get('/graficas', [PageController::class, 'showGraficas'])->name('app.graficas');
    });

    // Usuarios
    Route::group(['prefix' => 'usuarios'], function() {
        Route::post('/', [UserController::class, 'createPatient'])->name('usuarios.createUser');
        Route::patch('/{id}/password', [UserController::class, 'updatePassword'])->name('usuarios.password');
        Route::get('/pacientes', [UserController::class, 'getPatientsTable'])->name('usuarios.pacientes'); //NOTA PASAR A GRUPO PACIENTES
        Route::get('/doctores', [UserController::class, 'getDoctors'])->name('usuarios.doctores');
    });

    // Consultas
    Route::group(['prefix' => 'consultas'], function() {
        Route::get('/muestras', [MedicalConsultController::class, 'getAllTest'])->name('consulta.getEstudios');
        Route::get('/recetas', [MedicalConsultController::class, 'getAllPrescriptions'])->name('consulta.getRecetas');
        Route::get('/', [MedicalConsultController::class, 'getAllConsult'])->name('consulta.getAllConsult');
        Route::post('/', [MedicalConsultController::class, 'store'])->name('consulta.nueva');
        Route::get('/categorias', [MedicalConsultController::class, 'getConsultTypes'])->name('consulta.categorias');
        Route::get('/{id}', [MedicalConsultController::class, 'getConsultInfo'])->name('consulta.informacion');
        Route::delete('/{id}', [MedicalConsultController::class, 'cancelConsult'])->name('consulta.eliminar');
        Route::patch('/{id}', [MedicalConsultController::class, 'updateSchedule'])->name('consulta.actualizar');
        Route::get('/{id}/seguimiento', [MedicalConsultController::class, 'getFollowUps'])->name('consulta.seguimiento');
        Route::get('/{id}/receta', [MedicalConsultController::class, 'getPrescriptions'])->name('consulta.receta');

        Route::get('/{id}/doctor', [MedicalConsultController::class, 'getDoctor'])->name('consulta.doctor');
        Route::get('/{id}/anexo', [MedicalConsultController::class, 'getSpecialty'])->name('consulta.getAnexo');
        Route::get('/{id}/estudios', [MedicalConsultController::class, 'getTests'])->name('consulta.getEstudiosID');
        Route::post('/{id}/estudios', [MedicalConsultController::class, 'createTest'])->name('consulta.createEstudio');
        Route::post('/{id}/resultados', [MedicalConsultController::class, 'createConsultData'])->name('consulta.setResultados');
        Route::get('/{id}/pago', [MedicalConsultController::class, 'getConsultPayment'])->name('consulta.getPago');
        Route::post('/{id}/pago', [MedicalConsultController::class, 'createPayment'])->name('consulta.setPago');
        Route::post('/{id}/iniciar', [MedicalConsultController::class, 'startSchedule'])->name('consulta.startConsulta');
        // Route::post('/{id}/iniciar', [MedicalConsultController::class, 'startSchedule'])->name('consulta.createEstudio');
        Route::post('/{id}/confirmar', [MedicalConsultController::class, 'confirmSchedule'])->name('consulta.confirmConsulta');
        Route::post('/{id}/asistencia', [MedicalConsultController::class, 'startAssitance'])->name('consulta.startAssitance');

        Route::post('/{id}/signosvitales', [MedicalConsultController::class, 'startScheduleNurse'])->name('consulta.startScheduleNurse');
    });

    //Imagenes
    Route::get('/images/users/{id}', function ($id) {
        $storage = storage_path('app/user/'.$id.'');
        return file_exists($storage) ? Image::make($storage)->response() : response()->view('errors.404',[], 404);
    });

    //Archivos
    Route::get('/estudio/archivo/{id}', function ($id) {
        $storage = storage_path('app/test/results/'.$id.'');
        return file_exists($storage) ? response()->file($storage) : response()->view('errors.404',[], 404);
    });

    //Sucursales
    Route::group(['prefix' => 'sucursales'], function() {
        Route::get('/', [BranchController::class, 'getAllBranches'])->name('sucursal.getSucursales');
        Route::get('/{id}/especialidades/doctores', [BranchController::class, 'getDoctorsAllSpecialties'])->name('sucursal.getEspecialidades');
        Route::get('/{id}/empleados/{employeeID}/agenda', [BranchController::class, 'getSchedules'])->name('sucursales.getAgendaEmpleado');
        Route::get('/{id}/empleados/{employeeID}/horarios', [BranchController::class, 'getBusinessHours'])->name('sucursales.getHorarioEmpleado');
        Route::get('/{id}/agenda', [BranchController::class, 'getBranchSchedules'])->name('sucursales.getAgendaSucursales');
        Route::get('/admin', [BranchController::class, 'getBranchesAdmin'])->name('sucursal.getSucursalesAdmin');
        Route::post('/{id}/deshabilitar', [BranchController::class, 'disableBranch'])->name('sucursal.disableBranch');
        Route::post('/{id}/habilitar', [BranchController::class, 'enableBranch'])->name('sucursal.enableBranch');
        Route::post('/', [BranchController::class, 'createBranch'])->name('sucursal.createBranch');
        Route::post('/{id}', [BranchController::class, 'updateBranch'])->name('sucursal.updateBranch');
    });


    //Pacientes
    Route::group(['prefix' => 'pacientes'], function() {
        Route::get('/', [PatientController::class, 'getAllPatients'])->name('pacientes.getPacientes');
        Route::post('/', [PatientController::class, 'createPatient'])->name('pacientes.createPaciente');
        Route::delete('/{id}', [PatientController::class, 'deletePatient'])->name('pacientes.deletePatient');
        Route::patch('/{id}', [PatientController::class, 'updatePatient'])->name('pacientes.updatePaciente');
        Route::get('/deudas', [PatientController::class, 'getPatientsWithDebts'])->name('pacientes.getPacientesDeudas');
        Route::get('/{id}', [PatientController::class, 'getPatientByID'])->name('pacientes.getPaciente');
        Route::get('/{id}/deudas', [PatientController::class, 'getPatientDebts'])->name('pacientes.getPacienteDeudas');
        Route::get('/{id}', [PatientController::class, 'getPatientByID'])->name('pacientes.getPaciente');
        Route::get('/{id}/consultas/categoria/{categoria}', [PatientController::class, 'getAllConsults'])->name('pacientes.getCategoria');
        Route::get('/{id}/agenda', [PatientController::class, 'getSchedules'])->name('pacientes.getAgenda');
        Route::get('/{id}/recetas', [PatientController::class, 'showMedicalPrescriptions'])->name('usuarios.medicalPrescription');
        Route::get('/{id}/estudios', [PatientController::class, 'showMedicalTests'])->name('usuarios.medicalTest');
        Route::get('/{id}/preregistro', [PatientController::class, 'getPreregistration'])->name('pacientes.getPreregistro');
        Route::patch('/{id}/preregistro', [PreregistrationController::class, 'updatePreregistration'])->name('pacientes.updatePreregistro');

        Route::get('/{id}/historial', [PatientController::class, 'getHistory'])->name('pacientes.historial');
        Route::post('/{id}/historial', [PatientController::class, 'updateHistory'])->name('pacientes.setHistorial');
    });

    //Empleados
    Route::group(['prefix' => 'empleados'], function() {
        Route::get('/', [EmployeeController::class, 'getAllEmployees'])->name('empleados.todos');
        Route::post('/', [EmployeeController::class, 'createEmployee'])->name('empleados.createEmpleado');
        Route::patch('/{id}', [EmployeeController::class, 'updateEmployee'])->name('empleados.updateEmpleado');
        Route::get('/{id}/sucursales', [EmployeeController::class, 'getEmployeeBranches'])->name('empleados.sucursales');
        Route::get('/{id}/agenda', [EmployeeController::class, 'getEmployeeSchedules'])->name('empleados.getIDAgenda');
        Route::get('/agenda', [EmployeeController::class, 'getAllSchedules'])->name('empleados.getAgendas');
        Route::post('/{id}/deshabilitar', [EmployeeController::class, 'disableEmployee'])->name('empleados.disableEmpleado');
        Route::post('/{id}/habilitar', [EmployeeController::class, 'enableEmployee'])->name('empleados.enableEmpleado');
        Route::get('/roles', [EmployeeController::class, 'getAllRoles'])->name('empleados.getAllRoles');
        Route::get('{id}/roles', [EmployeeController::class, 'getEmployeeRoles'])->name('empleados.getrolesEmpleado');
        Route::post('{id}/roles', [EmployeeController::class, 'setEmployeeRoles'])->name('empleados.setrolesEmpleado');
        Route::get('/especialidades', [EmployeeController::class, 'getSpecialties'])->name('empleados.getSpecialties');
        Route::get('/{id}/titulos', [EmployeeController::class, 'getTitles'])->name('empleados.getTitles');
        Route::get('/{id}/horarios', [EmployeeController::class, 'getHours'])->name('empleados.getHours');

        Route::post('/{id}/titulos', [EmployeeController::class, 'setTitles'])->name('empleados.setTitles');
        Route::post('/{id}/horarios', [EmployeeController::class, 'setHours'])->name('empleados.setHours');
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
        Route::get('/medicamentos/admin', [ProductController::class, 'getAllMedicaments'])->name('productos.allMedicamentos');
        Route::post('/medicamentos/{id}', [ProductController::class, 'updateMedicament'])->name('productos.updateMedicament');
        Route::post('/medicamentos', [ProductController::class, 'createMedicament'])->name('productos.createMedicament');
        Route::get('/primera-consulta', [ProductController::class, 'getPrimerConsulta'])->name('productos.primerConsulta');
        Route::get('/cita-subsecuente', [ProductController::class, 'getCitaSubsecuente'])->name('productos.citaSubsecuente');
    });

    //Estudios
    Route::group(['prefix' => 'estudios'], function() {
        Route::get('/laboratorio/creados', [LaboratorioTestController::class, 'getCreatedTests'])->name('estudios.getLaboratorioCreados');
        Route::get('/laboratorio/muestras', [LaboratorioTestController::class, 'getSampleTests'])->name('estudios.getLaboratorioMuestra');
        Route::get('/laboratorio/completados', [LaboratorioTestController::class, 'getCompletedTest'])->name('estudios.getLaboratorioCompletados');
        Route::get('/imagenologia/creados', [ImagenologiaTestController::class, 'getCreatedTests'])->name('estudios.getImagenologiaCreados');
        Route::get('/imagenologia/muestras', [ImagenologiaTestController::class, 'getSampleTests'])->name('estudios.getImagenologiaMuestra');
        Route::get('/imagenologia/completados', [ImagenologiaTestController::class, 'getCompletedTest'])->name('estudios.getImagenologiaCompletados');
        Route::get('/resultados/{id}', [MedicalTestResultController::class, 'getResultFile'])->name('estudios.getResultado');
        // Route::get('/{id}/resultados', [MedicalTestResultController::class, 'testResult'])->name('estudios.getResultados');
        Route::post('/{id}/resultados', [MedicalTestResultController::class, 'testResult'])->name('estudios.setResultados');

    });

    //Pagos
    Route::group(['prefix' => 'pagos'], function() {
        Route::post('/', [PaymentController::class, 'createPayment'])->name('pagos.createPayment');
        Route::get('/faltantes', [PaymentController::class, 'getAllMissingPayments'])->name('pagos.getFaltantes');
        Route::get('/{id}', [PaymentController::class, 'getPayment'])->name('pagos.getPago');
        Route::get('/{id}/productos', [PaymentController::class, 'getPaymentProductsByID'])->name('pagos.getProductos');
        Route::get('/{id}/deudas', [PaymentController::class, 'getAllDebtsByPaymentID'])->name('pagos.getDeudas');
        Route::post('/{id}/deudas', [PaymentController::class, 'setDebtPayment'])->name('pagos.setDeuda');
        Route::post('/{id}/pago', [PaymentController::class, 'createPaymentByID'])->name('pagos.createPaymentByID');
        Route::delete('/{id}', [PaymentController::class, 'deletePaymentByID'])->name('pagos.deletePayment');
        Route::get('/ultimo', [PaymentController::class, 'getLastID'])->name('pagos.getLastID');
    });

    //Checkup
    Route::group(['prefix' => 'checkup'], function() {
        Route::get('/agenda', [CheckupCategoryController::class, 'getSchedules'])->name('checkup.getAgenda');
        Route::get('/categorias', [CheckupCategoryController::class, 'getAllCategories'])->name('checkup.getCategorias');
        Route::get('/pendientes', [CheckupCategoryController::class, 'getPendings'])->name('checkup.getPendientes');
        Route::get('/{id}', [CheckupCategoryController::class, 'getCheckupByID'])->name('checkup.getCheckup');
        Route::post('/', [CheckupCategoryController::class, 'createCheckups'])->name('checkup.setNuevo');
        Route::patch('/', [CheckupCategoryController::class, 'updateCheckups'])->name('checkup.update');
        Route::delete('/{id}', [CheckupCategoryController::class, 'cancelCheckup'])->name('checkup.cancel');
        Route::get('/{id}/resultados', [CheckupCategoryController::class, 'getCheckupTest'])->name('checkup.getCheckupTest');
    });

    Route::group(['prefix' => 'graficas'], function() {
        Route::get('/citas', [GraficosController::class, 'getCita'])->name('graficos.citas');
        Route::get('/consultas/especialidad/{id}', [GraficosController::class, 'getConsultaEspecialidad'])->name('graficos.consultaEspecialidad');
        Route::get('/consultas/medico/{id}', [GraficosController::class, 'getConsultaMedico'])->name('graficos.consultaMedico');
        Route::get('/consultas/servicio/{id}', [GraficosController::class, 'getConsultaServicio'])->name('graficos.consultaServicio');
        Route::get('/estudios/laboratorio', [GraficosController::class, 'getEstudiosLaboratorio'])->name('graficos.estudiosLaboratorio');
        Route::get('/estudios/imagenologia', [GraficosController::class, 'getEstudiosImagenologia'])->name('graficos.estudiosImagenologia');
        Route::get('/cobro/producto/{id}', [GraficosController::class, 'getCobroProducto'])->name('graficos.cobroProducto');
        Route::get('/cobro/servicio/{id}', [GraficosController::class, 'getCobroServicio'])->name('graficos.cobroServicio');
        Route::get('/tiempo', [GraficosController::class, 'getTiempo'])->name('graficos.tiempo');
        Route::get('/tiempo/consulta/{id}', [GraficosController::class, 'getTiempoConsulta'])->name('graficos.tiempoConsulta');
    });
});
