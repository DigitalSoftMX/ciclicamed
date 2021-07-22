<?php

namespace App\Http\Controllers\Medical\Consult;

use App\Http\Controllers\Controller;
use App\Http\Requests\Medical\Consult\MedicalConsultRequest;
use App\Models\Medical\Attachment\MedicalAttachment;
use App\Models\Medical\Attachment\MedicalAttachmentFollowUp;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Consult\MedicalConsultStatus;
use App\Models\Medical\Consult\MedicalConsultCategory;
use App\Models\Medical\History\MedicalHistory;
use App\Models\Medical\Prescription\MedicalPrescription;
use App\Models\Medical\Test\MedicalTest;
use App\Models\Medical\Test\MedicalTestOrder;
use App\Models\Medical\Test\MedicalTestSample;
use App\Models\Medical\Test\MedicalTestStatus;
use App\Models\Patient\Patient;
use App\Models\Payment\Payment;
use App\Models\Product\Product;
use App\Models\Product\ProductPayment;
use App\Models\User\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use PhpParser\Node\Expr\Cast\Object_;
use Illuminate\Validation\Validator;

class MedicalConsultController extends Controller
{
    public function startAssitance($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole(['Asistente', 'Administrador']))
        {
            MedicalConsult::findOrFail($id)->update([
                'assistant_start_at' => Carbon::now()->setTimezone('America/Mexico_City')
            ]);

            return response()->json(true, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para modificar esta información']
        ]], 401);
    }

    public function getAllTest(Request $request)
    {
        $prescriptions = [];
        if($request->has('query'))
        {
            $query = $request->input('query');
            $prescriptions = MedicalConsult::has('testScheduled')
            ->where(function($item) use($query) {
                $item->whereHas('patient', function($item) use($query) {
                    $item->where('first_name', 'like', '%'.$query.'%')
                          ->orWhere('last_name', 'like', '%'.$query.'%');
                })
                ->orWhereHas('testScheduled', function($item) use($query) {
                    $item->where('test_code', 'like', '%'.$query.'%');
                })
                ->orWhereHas('testScheduled.status', function($item) use($query) {
                    $item->where('name', 'like', '%'.$query.'%');
                })
                ->orWhereHas('testScheduled.product', function($item) use($query) {
                    $item->where('product_code', 'like', '%'.$query.'%')
                         ->orWhere('supplier_code', 'like', '%'.$query.'%');
                });
                
            })->orderBy('consult_schedule_start', 'desc')->select('id', 'consult_schedule_start', 'consult_schedule_finish', 'patient_id')->paginate();
        } else {
            $prescriptions = MedicalConsult::has('testScheduled')
            ->orderBy('consult_schedule_start', 'desc')
            ->select('id', 'consult_schedule_start', 'consult_schedule_finish', 'patient_id')
            ->paginate();
        }
        
        $response = [
            'pagination' => [
                'total' => $prescriptions->total(),
                'per_page' => $prescriptions->perPage(),
                'current_page' => $prescriptions->currentPage(),
                'last_page' => $prescriptions->lastPage(),
                'from' => $prescriptions->firstItem(),
                'to' => $prescriptions->lastItem()
            ],
            'data' => $prescriptions->load('patient:id,first_name,last_name', 'testScheduled.status', 'testScheduled.order.product')
        ];
        return response()->json($response);
    }

    public function getAllPrescriptions(Request $request)
    {
        $prescriptions = [];
        if($request->has('query'))
        {
            $query = $request->input('query');
            $prescriptions = MedicalConsult::where(function($item) use($query) {
                $item->whereHas('patient', function($item) use($query) {
                    $item->where('first_name', 'like', '%'.$query.'%')
                          ->orWhere('last_name', 'like', '%'.$query.'%');
                })->orWhere('id', $query);
            })->orderBy('consult_schedule_start', 'desc')->select('id', 'consult_schedule_start', 'consult_schedule_finish', 'patient_id')->paginate();
        } else {
            $prescriptions = MedicalConsult::has('prescriptions')->orderBy('consult_schedule_start', 'desc')->select('id', 'consult_schedule_start', 'consult_schedule_finish', 'patient_id')->paginate();
        }
        
        $response = [
            'pagination' => [
                'total' => $prescriptions->total(),
                'per_page' => $prescriptions->perPage(),
                'current_page' => $prescriptions->currentPage(),
                'last_page' => $prescriptions->lastPage(),
                'from' => $prescriptions->firstItem(),
                'to' => $prescriptions->lastItem()
            ],
            'data' => $prescriptions->load('prescriptions', 'prescriptions.medicament', 'patient:id,first_name,last_name')
        ];
        return response()->json($response);
    }

    public function confirmSchedule($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        $consult = MedicalConsult::findOrFail($id);
        if($user->hasRole('Asistente') && intval($consult['medicalconsultstatus_id'] <= 4) && intval(Auth::user()->id) === intval($user['id']) || $user->hasRole('Administrador'))
        {
            $consult->update([
                'medicalconsultstatus_id' => 2
            ]);
            
            return response()->json([], 200)->withCookie('consult', $id);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para modificar esta información']
        ]], 401);
    }

    public function startSchedule($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        $consult = MedicalConsult::findOrFail($id);
        $time = Carbon::now()->setTimezone('America/Mexico_City');

        if(intval($consult['medicalconsultstatus_id'] >= 5) || $user->hasRole('Administrador'))
        {
            return response()->json([], 200)->withCookie('consult', $id);
        }

        if($user->hasRole('Doctor') && intval($consult['medicalconsultstatus_id'] <= 4)  || $user->hasRole('Administrador'))
        {
            if(!isset($consult['consult_start_at']))
            {
                $consult->update([
                    'consult_start_at' => $time,
                    'medicalconsultstatus_id' => 4
                ]);
            }
            
            return response()->json([], 200)->withCookie('consult', $id);
        }

        if($user->hasRole('Enfermera') && intval($consult['medicalconsultstatus_id'] <= 4 && !isset($consult['nurse_finish_at']))  || $user->hasRole('Administrador'))
        {
            if(!isset($consult['nurse_start_at']))
            {
                $consult->update([
                    'assistant_finish_at' => $time,
                    'nurse_start_at' => $time,
                    'medicalconsultstatus_id' => 4
                ]);
            }
            
            return response()->json([], 200)->withCookie('consult', $id);
        }    

        return response()->json(['errors' => [
            'permisos' => ['Esta consulta ya no se puede modificar']
        ]], 401);
    }

    public function createPayment(Request $request, $id)
    {
        $consult = MedicalConsult::findOrFail($id);
        $user = User::findOrFail(Auth::user()->id);
        if((intval($consult['medicalconsultstatus_id'] <= 4) && $user->hasRole('Doctor')) && intval($consult['doctor_id'] === intval($user['employee']['id']))|| $user->hasRole('Administrador'))
        {
            $product = ProductPayment::where('consult_created', $id)->get();
            if(count($request->input('data.products')) > 0)
            {
                $discount = array_sum(array_column($request->input('data.products'), 'discount'));
                $price = array_sum(array_column($request->input('data.products'), 'price'));
                $paymentID = 0;

                if($product->isNotEmpty())
                {
                    $paymentID = $product->first()->payment_id;
                    Payment::findOrFail($paymentID)->update([
                        'updated_by' => $user['employee']['id'],
                        'discount' => $discount,
                        'total' => $price - $discount,
                    ]);
                }
                else
                {
                    $paymentID = Payment::create([
                        'created_by' => $user['employee']['id'],
                        'branch_id' => $request->input('data.branch_id'),
                        'discount' => $discount,
                        'total' => $price - $discount,
                        'paymentstatus_id' => 1,
                        'patient_id' => $request->input('data.patient_id')
                    ])->id;
                }

                $productsID = array_column($request->input('data.products'), 'id');
                $productExist = ProductPayment::where('payment_id', $paymentID)->whereNotIn('product_id', $productsID);
                if($productExist->get()->isNotEmpty())
                {
                   $productExist->delete();
                }

                foreach($request->input('data.products') as $value){
                    $productPayment = ProductPayment::where('payment_id', $paymentID)->where('product_id', $value['id'])->first();
                    if(!isset($productPayment))
                    {
                        ProductPayment::create([
                            'consult_created' => $id,
                            'payment_id' => $paymentID,
                            'product_id' => $value['id']
                        ]);
                    }
                }

                $consult->update([
                    'consult_finish_at' => Carbon::now()->setTimezone('America/Mexico_City'),
                    'medicalconsultstatus_id' => 5
                ]);
                Cookie::queue(Cookie::forget('consult'));
                return response()->json(true, 200);
            }
            else {
                if(isset($product))
                {
                    $paymentID = $product->first()->payment_id;
                    Payment::findOrFail($paymentID)->delete();

                    Cookie::queue(Cookie::forget('consult'));
                    return response()->json(true, 200);
                }
            }
            Cookie::queue(Cookie::forget('consult'));
            return response()->json(true, 200);
        }

        return response()->json(['errors' => [
            'permisos' => ['Esta consulta ya no se puede modificar']
        ]], 401);
    }

    public function getConsultPayment($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole(['Caja', 'Administrador', 'Doctor']))
        {
            $product = ProductPayment::where('consult_created', $id)->get();
            if(isset($product))
            {
                $payment = Payment::findOrFail($product->first()->consult_created)->where('paymentstatus_id', '<>', 4)->orderBy('created_at', 'desc');
                if(isset($payment))
                {
                    return response()->json($payment->first()->load('products')); 
                }
                return response()->json([], 204);
            }
            return response()->json([], 204);
        }
        
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para ver esta información']
        ]], 401);
    }

    public function createConsultData(Request $request, $id)
    {
        $user = User::findOrFail(Auth::user()->id);
        $consult = MedicalConsult::findOrFail($id);
        $time = Carbon::now()->setTimezone('America/Mexico_City');

        if(intval($consult['medicalconsultstatus_id'] > 4) && $user->hasRole(['Doctor', 'Enfermera']))
        {
            return response()->json(['errors' => [
                'permisos' => ['No tiene los permisos necesarios para realizar esta acción']
            ]], 401);
        }

        //Verifica si la consulta pertenece a un estudio medico y si es administrador, si es asi guarda la informacion relacionada con el estudio medico
        if((intval($consult['medicalspecialty_id'] === 11 || intval($consult['medicalspecialty_id']) === 12 ) && $user->hasRole('Administrador')))
        {
            $test = MedicalTest::where('scheduled_in', $id)->first();
            $data = MedicalTestSample::where('medicaltest_id', $test['id'])->orderBy('created_at', 'desc');
            if(isset($data) && isset($consult['nurse_start_at']))
            {
                $data->update([
                    'fum' => $request->input('data.fum'),
                    'collected_by' => $user['employee']['id'],
                    'finish_at' => $time,
                    'updated_by' => $user['employee']['id']
                ]);
                $consult->update([
                    'nurse_finish_at' => $time,
                    'medicalconsultstatus_id' => 5
                ]);
            }
            MedicalTestSample::create([
                'medicaltest_id' => $test['id'],
                'fum' => $request->input('data.fum'),
                'finish_at' => $time,
                'collected_by' => $user['employee']['id'],
                'updated_by' => $user['employee']['id']
            ]);
            $test->update([
                'medicalteststatus_id' => 2,
                'medicalconsultstatus_id' => 5
            ]);
            $consult->update([
                'nurse_finish_at' => $time,
                'medicalconsultstatus_id' => 5
            ]);
            Cookie::queue(Cookie::forget('consult'));
            return response()->json(true, 200);
        }

        //Ingresa los datos por parte de enfermera para estudios medicos
        if($user->hasRole('Enfermera') && !isset($consult['nurse_finish_at']))
        {
            //Checa si es estudio o consulta
            if(intval($consult['medicalspecialty_id']) === 11 || intval($consult['medicalspecialty_id']) === 12)
            {
                $test = MedicalTest::where('scheduled_in', $id)->first();
                $data = MedicalTestSample::where('medicaltest_id', $test['id'])->orderBy('created_at', 'desc');
                if(isset($data) && isset($consult['nurse_start_at']))
                {
                    $data->update([
                        'fum' => $request->input('data.fum'),
                        'collected_by' => $user['employee']['id'],
                        'finish_at' => $time,
                        'updated_by' => $user['employee']['id']
                    ]);
                    $consult->update([
                        'nurse_finish_at' => $time,
                        'medicalconsultstatus_id' => 5
                    ]);
                }
                MedicalTestSample::create([
                    'medicaltest_id' => $id,
                    'fum' => $request->input('data.fum'),
                    'finish_at' => $time,
                    'collected_by' => $user['employee']['id'],
                    'updated_by' => $user['employee']['id']
                ]);
                $test->update([
                    'medicalteststatus_id' => 2,
                    'medicalconsultstatus_id' => 5
                ]);
                $consult->update([
                    'nurse_finish_at' => $time,
                    'medicalconsultstatus_id' => 5
                ]);
                Cookie::queue(Cookie::forget('consult'));
                return response()->json(true, 200);
            }

            //Si es consulta normal verifica si ya no se ha ingresado informacion previa
            $data = MedicalAttachmentFollowUp::where('medicalconsult_id', $id)->orderBy('created_at', 'desc');
            if(isset($data) && isset($consult['nurse_start_at']))
            {
                //Si detecta que se ha ingresado informacion previa pero por alguna razon no concluyo la enfermera, actualiza
                $data->update([
                    'medicalconsult_id' => $id,
                    'data' => json_encode($request->input('data.cita')),
                    'medicalspecialty_id' => $consult->medicalspecialty_id,
                    'updated_by' => $user['employee']['id']
                ]);
                $consult->update([
                    'nurse_finish_at' => $time
                ]);
                Cookie::queue(Cookie::forget('consult'));
                return response()->json(true, 200);
            }
            MedicalAttachmentFollowUp::create([
                'medicalconsult_id' => $id,
                'data' => json_encode($request->input('data.cita')),
                'medicalspecialty_id' => $consult->medicalspecialty_id,
                'updated_by' => $user['employee']['id']
            ]);
            $consult->update([
                'nurse_finish_at' => $time
            ]);
            return response()->json(true, 200);
        }

        //Verifica si es una consulta normal
        if($user->hasRole(['Administrador', 'Doctor']))
        {
            $presentConsult = MedicalConsult::findOrFail($id);
            //Si es la primer consulta o si es un administrador, guarda historial medico
            if(intval($consult['medicalconsultcategory_id'] === 1) || $user->hasRole('Administrador'))
            {
                MedicalHistory::create([
                    'patient_id' => $presentConsult['patient_id'],
                    'medicalconsult_id' => $id,
                    'data' => json_encode($request->input('data.historial.data')),
                    'updated_by' => $user['employee']['id']
                ]);
            }

            $attachment = MedicalAttachment::where('patient_id', $presentConsult['patient_id'])->where('medicalspecialty_id', $presentConsult['medicalspecialty_id'])->get();
            if($attachment->isEmpty() || $user->hasRole('Administrador'))
            {
                MedicalAttachment::create([
                    'patient_id' => $presentConsult['patient_id'],
                    'data' => json_encode($request->input('data.especialidad')),
                    'medicalspecialty_id' => $presentConsult['medicalspecialty_id'],
                    'updated_by' => $user['employee']['id']
                ]);  
            }

            //Si es cita de seguimiento, se guarda la informacion de la cita de seguimiento
            if(intval($consult['medicalconsultcategory_id'] === 2))
            {
                MedicalAttachmentFollowUp::create([
                    'medicalconsult_id' => $id,
                    'data' => json_encode($request->input('data.cita.data')),
                    'medicalspecialty_id' => $presentConsult['medicalspecialty_id'],
                    'updated_by' => $user['employee']['id'],
                ]);
            }
            
            //Elimina la informacion de la receta que se haya ingresado previamente, para guardar la nueva receta
            MedicalPrescription::where('medicalconsult_id', $id)->delete();
            if(count($request->input('data.receta')) > 0)
            {
                foreach($request->input('data.receta') as $prescription)
                {
                    if(intval($prescription['medicament_id']) > 0)
                    {
                        MedicalPrescription::create([
                            'medicalconsult_id' => $consult['id'],
                            'medicament_id' => $prescription['medicament_id'],
                            'administration_type' => $prescription['administration_type'],
                            'rate' => $prescription['rate'],
                            'duration' => $prescription['duration'],
                        ]);
                    }
                }
            }

            //Se cancelan todos los estudios clinicos para guardar los nuevos estudios clinicos
            MedicalTest::where('created_in', $id)->update([
                'medicalteststatus_id' => 5
            ]);
            if(count($request->input('data.examen')) > 0)
            {
                foreach($request->input('data.examen') as $test)
                {
                    if(intval($test['id'] > 0))
                    {
                        //Verifica si el estudio clinico fue agendado correctamente para actualizar la cita
                        if(intval($test['consult_scheduled']['branch_id']) >= 1 && (bool)strtotime($test['consult_scheduled']['consult_schedule_start']) && (bool)strtotime($test['consult_scheduled']['consult_schedule_finish']))
                        {
                            $product = Product::findOrFail($test['order']['product_id'])->product_code;
                            $medicalconsultcategory_id = str_contains($product, 'IMA') ? 3 : 4;
                            $medicalspecialty_id = str_contains($product, 'IMA') ? 12 : 11;
                            $doctor_id = str_contains($product, 'IMA') ? 2 : 1;
                            //Verifica si no se ha cancelado el estudio clinico, si se cancela entonces tambien se cancela la cita
                            if( intval($test['medicalteststatus_id']) === 5)
                            {
                                MedicalConsult::findOrFail($test['consult_scheduled']['id'])->update([
                                    'medicalconsultstatus_id' => 6
                                ]);
                            }
                            //Si no se ha cancelado la cita, entonces se actualizan los datos de la consulta
                            else
                            {
                                MedicalConsult::findOrFail($test['consult_scheduled']['id'])->update([
                                    'doctor_id' => $doctor_id,
                                    'medicalconsultcategory_id' => $medicalconsultcategory_id,
                                    'consult_schedule_start' => $test['consult_scheduled']['consult_schedule_start'],
                                    'consult_schedule_finish' => $test['consult_scheduled']['consult_schedule_finish'],
                                    'branch_id' => $test['consult_scheduled']['branch_id'],
                                    'medicalspecialty_id' => $medicalspecialty_id
                                ]);
                            }
                            
                        }
                        $testEdited = MedicalTest::findOrFail($test['id'])->update([
                            'medicalteststatus_id' => $test['medicalteststatus_id']
                        ]);
                        if($testEdited && intval($test['medicalteststatus_id']) !== 5 )
                        {
                            MedicalTestOrder::create([
                                'medicaltest_id' => $test['id'],
                                'product_id' => $test['order']['product_id'],
                                'updated_by' => $user['employee']['id']
                            ]);
                        }
                    }
                    else
                    {
                        $scheduleID = -1;
                        //Verifica si el estudio clinico fue agendado o no para ingresar la informacion de la cita
                        if(intval($test['consult_scheduled']['branch_id']) >= 1 && (bool)strtotime($test['consult_scheduled']['consult_schedule_start']) && (bool)strtotime($test['consult_scheduled']['consult_schedule_finish']))
                        {
                            $product = Product::findOrFail($test['order']['product_id'])->product_code;
                            $medicalconsultcategory_id = str_contains($product, 'IMA') ? 3 : 4;
                            $medicalspecialty_id = str_contains($product, 'IMA') ? 12 : 11;
                            $doctor_id = str_contains($product, 'IMA') ? 2 : 1;

                            $scheduleID = MedicalConsult::create([
                                'patient_id' => $presentConsult['patient_id'],
                                'doctor_id' => $doctor_id,
                                'created_by' => $user['employee']['id'],
                                'medicalconsultcategory_id' => $medicalconsultcategory_id,
                                'consult_reason' => 'Cita para estudio clínico',
                                'consult_schedule_start' => $test['consult_scheduled']['consult_schedule_start'],
                                'consult_schedule_finish' => $test['consult_scheduled']['consult_schedule_finish'],
                                'branch_id' => $test['consult_scheduled']['branch_id'],
                                'medicalconsultstatus_id' => 1,
                                'medicalspecialty_id' => $medicalspecialty_id
                            ])->id;
                        }
                        $lastTest = MedicalTest::orderBy('id', 'desc')->first()->id;
                        $testCode ="MUE-" . str_pad((int) $lastTest++, 3, "0", STR_PAD_LEFT);
                        //Si la cita fue creada entonces crea un estudio clinico con la fecha de la cita para tal estudio
                        if($scheduleID >= 1)
                        {
                            $testCreated = MedicalTest::create([
                                'test_code' => $testCode,
                                'created_in' => $id,
                                'scheduled_in' => $scheduleID,
                                'medicalteststatus_id' => 1,
                            ])->id;
                        }
                        //Caso contrario solo crea el estudio sin la cita
                        else{
                            $testCreated = MedicalTest::create([
                                'test_code' => $testCode,
                                'created_in' => $id,
                                'medicalteststatus_id' => 1,
                            ])->id;
                        }
                        MedicalTestOrder::create([
                            'medicaltest_id' => $testCreated,
                            'product_id' => $test['order']['product_id'],
                            'updated_by' => $user['employee']['id']
                        ]);
                    }
                }
            }
            //Se ingresa la hora en que termina la consulta
            $presentConsult->update([
                'consult_finish_at' => $time = Carbon::now()->setTimezone('America/Mexico_City')
            ]);
            return response()->json(true, 200);
        }
        // Cookie::queue(Cookie::forget('consult'));
        return response()->json(['errors' => [
            'permisos' => ['No tiene los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function store(Request $request)
    {        
        $firstConsult = null;
        $user = User::findOrFail(Auth::user()->id);

        if($user->hasRole('Paciente'))
        {
            $request->validate([
                'data.doctor_id' => 'required|min:1',
                'data.consult_reason' => 'required|max:255',
                'data.consult_schedule_start' => 'required',
                'data.branch_id' => 'required|min:1'
            ]);

            $messageTest = [
                'data.product_id.min' => 'Debe de seleccionar un estudio',
            ];

            $ruleTest =[
                'data.product_id' => 'required|numeric|min:1',
            ];

            $medicalspecialty_id = intval($request->input('data.doctor_id'));
            $medicalconsultcategory_id = 0;
            $firstConsult = MedicalConsult::where('patient_id', $user['patient']['id'])->where('medicalconsultcategory_id', 1)->get();
            switch($medicalspecialty_id)
            {
                case 1:
                    request()->validate($ruleTest, $messageTest);
                    $medicalspecialty_id = 11;
                    $medicalconsultcategory_id = 4;
                    break;
                case 2:
                    request()->validate($ruleTest, $messageTest);
                    $medicalspecialty_id = 12;
                    $medicalconsultcategory_id = 3;
                    break;
                default:
                    $medicalspecialty_id = intval($request->input('data.doctor_id'));
                    $medicalconsultcategory_id = isset($firstConsult) ? 2 : 1;
                    break;
            }

            $finishTime = Carbon::parse($request->input('data.consult_schedule_start'));
            switch($medicalconsultcategory_id)
            {
                case 1:
                    $finishTime = $finishTime->addMinutes(60);
                    break;
                case 2:
                    $finishTime = $finishTime->addMinutes(30);
                    break;
                default:
                    $finishTime = $finishTime->addMinutes(30);
                    break;
            }

            $consult = MedicalConsult::create([
                'patient_id' => $user['patient']['id'],
                'doctor_id' => $request->input('data.doctor_id'),
                'medicalconsultcategory_id' => $medicalconsultcategory_id,
                'consult_reason' => $request->input('data.consult_reason'),
                'consult_schedule_start' => Carbon::parse($request->input('data.consult_schedule_start')),
                'consult_schedule_finish' => $finishTime,
                'medicalspecialty_id' => $medicalspecialty_id,
                'branch_id' => $request->input('data.branch_id'),
                'medicalconsultstatus_id' => 1,
            ]);
            

            if($medicalconsultcategory_id === 3 || $medicalconsultcategory_id === 4)
            {
                $lastTest = MedicalTest::orderBy('id', 'desc')->first()->id;
                $testCode ="MUE-" . str_pad((int) $lastTest++, 3, "0", STR_PAD_LEFT);
                $newTest = MedicalTest::create([
                    'test_code' => $testCode,
                    'scheduled_in' => $consult['id'],
                    'medicalteststatus_id' => 1
                ]);

                MedicalTestOrder::create([
                    'medicaltest_id' => $newTest->id,
                    'product_id' => $request['data.product_id']
                ]);
            }

            $consult->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
            return  response()->json($consult);
        }

        
        if($user->hasRole(['Doctor', 'Asistente', 'Enfermera', 'Administrador']))
        {
            
            $messages = [
                'data.patient_id.min' => 'Debe de seleccionar un paciente',
                'data.doctor_id.min' => 'Debe de seleccionar un doctor',
                'data.consult_reason.required' => 'Debe de ingresar el motivo de la cita',
                'data.consult_schedule_start' => 'Debe de selecionar la hora de inicio de la cita',
                'data.consult_schedule_finish' => 'Debe de selecionar la hora de inicio de la cita',
                'data.branch_id.min' => 'Debe de seleccionar una sucursal',
            ];

            $rules =[
                'data.patient_id' => 'required|numeric|min:1',
                'data.doctor_id' => 'required|numeric|min:1',
                'data.consult_reason' => 'required|max:255',
                'data.consult_schedule_start' => 'required',
                'data.consult_schedule_finish' => 'required',
                'data.branch_id' => 'required|numeric|min:1'
            ];

            

            request()->validate($rules, $messages);

            $medicalspecialty_id = intval($request->input('data.doctor_id'));
            $medicalconsultcategory_id = 0;

            $messageTest = [
                'data.product_id.min' => 'Debe de seleccionar un estudio',
            ];

            $ruleTest =[
                'data.product_id' => 'required|numeric|min:1',
            ];
            
            $firstConsult = MedicalConsult::where('patient_id', $request->input('data.patient_id'))->where('medicalconsultcategory_id', 1)->get();
            switch($medicalspecialty_id)
            {
                case 1:
                    request()->validate($ruleTest, $messageTest);
                    $medicalspecialty_id = 11;
                    $medicalconsultcategory_id = 4;
                    break;
                case 2:
                    request()->validate($ruleTest, $messageTest);
                    $medicalspecialty_id = 12;
                    $medicalconsultcategory_id = 3;
                    break;
                default:
                    $medicalspecialty_id = intval($request->input('data.medicalspecialty_id'));
                    $medicalconsultcategory_id = isset($firstConsult) ? 2 : 1;
                    break;
            }

            $consult = MedicalConsult::create([
                'patient_id' => $request->input('data.patient_id'),
                'doctor_id' => $request->input('data.doctor_id'),
                'medicalconsultcategory_id' => $medicalconsultcategory_id,
                'consult_reason' => $request->input('data.consult_reason'),
                'consult_schedule_start' => Carbon::parse($request->input('data.consult_schedule_start')),
                'consult_schedule_finish' => Carbon::parse($request->input('data.consult_schedule_finish')),
                'medicalspecialty_id' => $medicalspecialty_id,
                'branch_id' => $request->input('data.branch_id'),
                'medicalconsultstatus_id' => 1,
                'created_by' => $user['employee']['id']
            ]);

            if($medicalconsultcategory_id === 3 || $medicalconsultcategory_id === 4)
            {
                $lastTest = MedicalTest::orderBy('id', 'desc')->first()->id;
                $testCode ="MUE-" . str_pad((int) $lastTest++, 3, "0", STR_PAD_LEFT);
                $newTest = MedicalTest::create([
                    'test_code' => $testCode,
                    'scheduled_in' => $consult['id'],
                    'medicalteststatus_id' => 1
                ]);

                MedicalTestOrder::create([
                    'medicaltest_id' => $newTest->id,
                    'product_id' => $request['data.product_id']
                ]);
            }

            $consult->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
            return  response()->json($consult);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function updateSchedule(Request $request, $id)
    {
        $user = User::findOrFail(Auth::user()->id)->hasRole(['Paciente', 'Laboratorio', 'Imagenología']);
        if(!$user)
        {
            $consult = MedicalConsult::findOrFail($id);
            $consult->update([
                'patient_id' => $request->input('data.patient_id'),
                'doctor_id' => $request->input('data.doctor_id'),
                'medicalconsultcategory_id' => $request->input('data.medicalconsultcategory_id'),
                'consult_reason' => $request->input('data.consult_reason'),
                'consult_schedule_start' => Carbon::parse($request->input('data.consult_schedule_start')),
                'consult_schedule_finish' => Carbon::parse($request->input('data.consult_schedule_finish')),
                'medicalspecialty_id' => $request->input('data.medicalspecialty_id'),
                'branch_id' => $request->input('data.branch_id'),
                'medicalconsultstatus_id' => 1,
            ]);
            return response()->json($consult);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getConsultTypes()
    {
        $type = MedicalConsultCategory::all();
        return response()->json($type);
    }

    public function cancelConsult(Request $request, $id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if(!$user->hasRole(['Paciente', 'Laboratorio', 'Imagenología']))
        {
            $consultType = MedicalConsultStatus::where('name', 'Cancelado')->firstOrFail()->id;
            $consult = MedicalConsult::findOrFail($id);
            $today = Carbon::now()->startOfDay();
            $consultDate = Carbon::parse($consult->consult_schedule_start)->startOfDay();
            $dayDifference = $today->diffInDays($consultDate, false);
            if(!$user->hasRole('Administrador'))
            {
                if ($dayDifference < 0)
                {
                    return response()->json([
                        'errors' => [
                            'date' => [
                                "Solo se pueden cancelar citas del día de hoy o posteriores"
                            ]
                        ]
                    ], 422);
                }
                if(in_array($consult->status->name, ['En consulta', 'Finalizado', 'Cancelado']))
                {
                    return response()->json([
                        'errors' => [
                            'consult' => [
                                "No se puede cancelar esta cita por que está {$consult->status->name}"
                            ]
                        ]
                    ], 422);
                }
            }

            $consult->update([
                'medicalconsultstatus_id' => $consultType,
                'consult_schedule_start' => Carbon::parse($consult->consult_schedule_start)->setTime(21,0,0),
                'consult_schedule_finish' => Carbon::parse($consult->consult_schedule_start)->setTime(21,0,0)
            ]);
            $consult->status;
            return response()->json($consult);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getTests($id)
    {
        if(intval($id) > 0)
        {
            $tests = MedicalTest::where('created_in', $id)->where('medicalteststatus_id', '<>', 5)->get()->load('order.product:id,name,product_code', 'result', 'samples', 'consultScheduled', 'status');
            foreach($tests as $test)
            {
                if(isset($test['result']['results']))
                {
                    $test['result']['results'] = json_decode($test['result']['results']);
                }
                
            }
            return response()->json($tests);
        }
        return response()->json([], 404);
    }

    public function createTest(Request $request, $id)
    {
        $testStatus = MedicalTestStatus::where('name', 'Estudio creado')->first()->id;
        foreach($request->input('data') as $order)
        {
            if($order['order']['medicaltest_id'] <= 0)
            {
                $test = MedicalTest::create([
                'created_in' => $id,
                'scheduled_in' => null,
                'finished_at' => null,
                'medicalteststatus_id' => $testStatus
                ]);
                MedicalTestOrder::create([
                    'medicaltest_id' => $test->id,
                    'product_id' => $order['order']['product_id'],
                    'updated_by' => null,
                    'update_note' => null
                ]);
            } else {
                MedicalTest::where('id', $order['id'])->update([
                    'medicalteststatus_id' => $order['status'] ?? $order['order']['status']
                ]);
                MedicalTestOrder::create($order['order']);
            }
        }

        $test = MedicalConsult::findOrFail($id)->testsCreated->load('order.product:id,name', 'results', 'samples')->where('medicalteststatus_id', '<>', 5)->all();
        return response()->json($request->input('data'));
    }

    public function getFollowUps($id)
    {
        $consult = MedicalAttachmentFollowUp::where('medicalconsult_id', $id)->orderBy('created_at', 'desc')->first();
        if(isset($consult))
        {
            $consult['data'] = json_decode($consult['data']);
            return response()->json($consult);
        }
        return response()->json(null, 404);
    }

    public function getPrescriptions($id)
    {
        $consult = MedicalConsult::findOrFail($id);
        return response()->json($consult->prescriptions->load('medicament'));
    }

    public function getSpecialty($id)
    {
        $consult = MedicalConsult::findOrFail($id);
        $attachment = MedicalAttachment::where('medicalspecialty_id', $consult['medicalspecialty_id'])->orderBy('created_at', 'desc')->first();
        $attachment['data'] = json_decode($attachment['data']);
        return response()->json($attachment);
    }

    public function createPrescription(Request $request, $id)
    {
        MedicalPrescription::where('medicalconsult_id', $id)->delete();
        $prescription = [];
        foreach($request->input('data') as $medicament)
        {
            $data = MedicalPrescription::create([
                'medicalconsult_id' => $id,
                'medicament_id' => $medicament['medicament_id'],
                'administation_type' => $medicament['administation_type'],
                'rate' => $medicament['rate'],
                'duration' => $medicament['duration'],
                'update_by' => $medicament['update_by'] ?? null,
                'update_note' => $medicament['update_note'] ?? null
            ]);
            array_push($prescription, $data);
        }
        return response()->json($prescription);
    }

    public function getConsultInfo($id)
    {
        $user = User::findOrFail(Auth::user()->id)->hasRole('Paciente');
        $consult = MedicalConsult::findOrFail($id);
        if($user)
        {
            $data = $consult->get(['id', 'consult_schedule_start', 'consult_schedule_finish', 'nurse_schedule_start', 'nurse_schedule_finish']);
            return response()->json($data);
        }
        if(intval($consult['medicalspecialty_id']) === 11 || intval($consult['medicalspecialty_id']) === 11)
        {
            $data = $consult->load('testScheduled.order.product.orderAnnotations');
            return response()->json($data);
        }
        
        return response()->json($consult);
    }

    public function getDoctor($id)
    {
        $consult = MedicalConsult::findOrFail($id)->doctor->load('specialties');
        return response()->json($consult);
    }

    
    
}