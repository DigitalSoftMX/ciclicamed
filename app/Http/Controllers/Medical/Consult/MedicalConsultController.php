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
use App\Models\Medical\Test\MedicalTestStatus;
use App\Models\Payment\Payment;
use App\Models\Product\ProductPayment;
use App\Models\User\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use PhpParser\Node\Expr\Cast\Object_;

class MedicalConsultController extends Controller
{
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
                    'assistant_finish_at' =>$time,
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
            if(count($request->input('data.products')) > 0)
            {
                $product = ProductPayment::where('consult_created', $id)->first();
                $discount = array_sum(array_column($request->input('data.products'), 'discount'));
                $price = array_sum(array_column($request->input('data.products'), 'price'));
                $paymentID = 0;

                if(isset($product))
                {
                    $paymentID = $product->payment['id'];
                    Payment::findOrFail($paymentID)->update([
                        'updated_by' => Auth::user()->id,
                        'discount' => $discount,
                        'total' => $price - $discount,
                    ]);
                }
                else
                {
                    $paymentID = Payment::create([
                        'created_by' => Auth::user()->id,
                        'branch_id' => $request->input('data.branch_id'),
                        'discount' => $discount,
                        'total' => $price - $discount,
                        'paymentstatus_id' => 1,
                        'patient_id' => $request->input('data.patient_id')
                    ])->id;
                }

                $productsID = array_column($request->input('data.products'), 'id');
                ProductPayment::where('payment_id', $paymentID)->whereNotIn('product_id', $productsID)->delete();

                foreach($request->input('data.products') as $value){
                    $productPayment = ProductPayment::where('payment_id', $paymentID)->where('product_id', $value['id'])->first();
                    if(!isset($productPayment))
                    {
                        ProductPayment::create([
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

            return response()->json(true, 200);
        }

        return response()->json(['errors' => [
            'permisos' => ['Esta consulta ya no se puede modificar']
        ]], 401);
    }

    public function getConsultPayment($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        $consult = MedicalConsult::findOrFail($id);
        if(($user->hasRole('Doctor') && intval($consult['id']) === intval($id)) || $user->hasRole(['Caja', 'Administrador']))
        {
            $product = ProductPayment::where('consult_created', 2);
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
                'permisos' => ['Esta consulta ya no se puede modificar']
            ]], 401);
        }

        if($user->hasRole(['Enfermera']) && !isset($consult['nurse_finish_at']))
        {
            $data = MedicalAttachmentFollowUp::where('medicalconsult_id', $id)->orderBy('created_at', 'desc');
            if(isset($data) && isset($consult['nurse_start_at']))
            {
                $data->update([
                    'medicalconsult_id' => $id,
                    'data' => json_encode($request->input('data.cita')),
                    'medicalspecialty_id' => $consult->medicalspecialty_id,
                    'updated_by' => Auth::user()->id
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
                'updated_by' => Auth::user()->id
            ]);
            $consult->update([
                'nurse_finish_at' => $time
            ]);
            Cookie::queue(Cookie::forget('consult'));
            return response()->json(true, 200);
        }

        if($user->hasRole(['Administrador', 'Doctor']))
        {
            if(intval($consult['medicalconsultcategory_id'] === 1) || $user->hasRole('Administrador'))
            {
                MedicalHistory::create([
                    'medicalconsult_id' => $id,
                    'data' => json_encode($request->input('data.historial.data')),
                    'updated_by' => Auth::user()->id
                ]);
        
                MedicalAttachment::create([
                    'patient_id' => $consult['patient_id'],
                    'data' => json_encode($request->input('data.especialidad')),
                    'medicalspecialty_id' => $consult['medicalspecialty_id'],
                    'updated_by' => Auth::user()->id
                ]);  
                
            }

            MedicalAttachmentFollowUp::create([
                'medicalconsult_id' => $id,
                'data' => json_encode($request->input('data.cita.data')),
                'medicalspecialty_id' => $consult->medicalspecialty_id,
                'updated_by' => Auth::user()->id,
                'consult_finish_at' => $time = Carbon::now()->setTimezone('America/Mexico_City')
            ]);

            
            if(count($request->input('data.receta')) > 0)
            {
                MedicalPrescription::where('medicalconsult_id', $id)->delete();
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

            if(count($request->input('data.examen')) > 0)
            {
                foreach($request->input('data.examen') as $test)
                {
                    if(intval($test['id'] > 0))
                    {
                        $testEdited = MedicalTest::findOrFail($test['id'])->update([
                            'medicalteststatus_id' => $test['medicalteststatus_id']
                        ]);
                        if($testEdited && intval($test['medicalteststatus_id']) !== 5 )
                        {
                            MedicalTestOrder::create([
                                'medicaltest_id' => $test['id'],
                                'product_id' => $test['order']['product_id']
                            ]);
                        }
                    }
                    else
                    {
                        $testCreated = MedicalTest::create([
                            'created_in' => $id,
                            'medicalteststatus_id' => 1
                        ])->id;
                        MedicalTestOrder::create([
                            'medicaltest_id' => $testCreated,
                            'product_id' => $test['order']['product_id']
                        ]);
                    }
                }
            }
        }
        // Cookie::queue(Cookie::forget('consult'));
        return response()->json(['errors' => [
            'permisos' => ['Esta consulta ya no se puede modificar']
        ]], 401);
    }

    public function store(Request $request)
    {
        // $consulType = MedicalConsultCategory::find($request->input('data.scheduleCategory'));


        // switch($consulType->id)
        // {
        //     case 1
        // }

        // if($request->input('data.doctor_id'))
        // {
        //     $consultExist = MedicalConsult::where('patient_id', $request->input('data.patient_id'))        
        //                 ->where('created_by', )
        //                 ->where('consult_schedule_start', '<=', $start)->where('consult_schedule_finish', '>=', $start)->get();
        // }
        // else
        // {
        //     $consultExist = MedicalConsult::where('patient_id', $request->input('data.patient_id'))        
        //                 ->where('created_by', )
        //                 ->where('consult_schedule_start', '<=', $start)->where('consult_schedule_finish', '>=', $start)->get();
        // }

        

        $user = User::findOrFail(Auth::user()->id);
        $firstConsult = null;
        if($user->hasRole('Paciente'))
        {
            $firstConsult = MedicalConsult::where('patient_id', $user['patient']['id'])->where('medicalconsultcategory_id', 1);
        }
        else
        {
            $firstConsult = MedicalConsult::where('patient_id', $request->input('data.patient_id'))->where('medicalconsultcategory_id', 1);
        }
        
        
        $medicalspecialty_id = intval($request->input('data.doctor_id'));
        $medicalconsultcategory_id = 0;
        
        switch($medicalspecialty_id)
        {
            case 1:
                $medicalspecialty_id = 11;
                $medicalconsultcategory_id = 4;
                break;
            case 2:
                $medicalspecialty_id = 12;
                $medicalconsultcategory_id = 3;
                break;
            default:
                $medicalspecialty_id = intval($request->input('data.doctor_id'));
                $medicalconsultcategory_id = isset($firstConsult) ? 2 : 1;
                break;
        }

        

        if($user->hasRole('Paciente'))
        {
            $finishTime = Carbon::parse($request->input('data.consult_schedule_start'));
            switch($medicalconsultcategory_id)
            {
                case 1:
                    $finishTime = $finishTime->addMinute(60);
                    break;
                case 2:
                    $finishTime = $finishTime->addMinute(30);
                    break;
                default:
                    $finishTime = $finishTime->addMinute(30);
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
            $consult->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
            return  response()->json($consult);
        }
        
        if($user->hasRole(['Doctor', 'Asistente', 'Enfermera', 'Administrador']))
        {
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
            ]);
            $consult->load('doctor:id,first_name,last_name', 'status', 'type', 'branch:id,name');
            return  response()->json($consult);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
        //Todo
        // Revisar si existe una cita ya creada con anterioridad que coincida con la hora ocupada
        // Agregar verificaciones de request
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
                'consult_schedule_start' => Carbon::createFromTimestamp($request->input('data.consult_schedule_start')),
                'consult_schedule_finish' => Carbon::createFromTimestamp($request->input('data.consult_schedule_finish')),
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
        $user = User::findOrFail(Auth::user()->id)->hasRole(['Paciente', 'Laboratorio', 'Imagenología']);
        if(!$user)
        {
            $consultType = MedicalConsultStatus::where('name', 'Cancelado')->firstOrFail()->id;
            $consult = MedicalConsult::findOrFail($id);
            $today = Carbon::now()->startOfDay();
            $consultDate = Carbon::parse($consult->consult_schedule_start)->startOfDay();
            $dayDifference = $today->diffInDays($consultDate, false);
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
            $test = MedicalTest::where('created_in', $id)->where('medicalteststatus_id', '<>', 5)->get()->load('order.product:id,name,product_code', 'results', 'samples');
            return response()->json($test);
        }
        return response()->json([], 404);
    }

    public function createTest(Request $request, $id)
    {
        $testStatus = MedicalTestStatus::where('name', 'Estudio creado')->first()->id;
        foreach($request->input('data') as $order)
        {
            if($order['order']['medicaltest_id'] === -1)
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
        $consult = MedicalConsult::findOrFail($id);
        if($consult->followUp->first())
        {
            $consult->followUp->first()->followUp->data = json_decode($consult->followUp->first()->followUp->data);
            return response()->json($consult->followUp->first());
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
        
        return response()->json($consult);
    }

    public function getHistory($id)
    {
        $consult = MedicalConsult::findOrFail($id);
        if(isset($consult->history))
        {
            $consult->data = json_decode($consult->data);
            return response()->json($consult->history);
        }
        return response()->json([], 204);
    }

    public function getDoctor($id)
    {
        $consult = MedicalConsult::findOrFail($id)->doctor->load('specialties');
        return response()->json($consult);
    }

    
    
}