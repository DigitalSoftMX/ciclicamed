<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Payment\NewPaymentRequest;
use App\Http\Requests\Payment\PaymentDebtRequest;
use App\Models\Patient\Patient;
use App\Models\Payment\Payment;
use App\Models\Payment\PaymentDebt;
use App\Models\Payment\PaymentStatus;
use App\Models\Product\ProductPayment;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    public function createPayment(NewPaymentRequest $request)
    {
        $request->validated();
        $user = User::findOrFail(Auth::user()->id);
        if(intval($request['data']['paymentMethod']['check']) > 1 && !is_numeric($request['data']['paymentMethod']['description']))
        {
            return response()->json(['errors' => [
                'tarjeta' => ['Verifique que haya ingresado correctamente los dígitos de la tarjeta']
            ]], 401);
        }

        if($request['data']['debt']['check'] && intval($request['data']['debt']['description']) === 0)
        {
            return response()->json(['errors' => [
                'tarjeta' => ['Ingrese una cantidad en deuda para continuar, o en su defecto no seleccione la opción']
            ]], 401);
        }

        if($user->hasRole(['Administrador', 'Caja', 'Caja administrador']))
        {
            if(count($request->input('data.products')) > 0)
            {
                $discount = array_sum(array_column($request->input('data.products'), 'discount'));
                $price = array_sum(array_column($request->input('data.products'), 'price'));

                $creditCard = null;
                if(intval($request['data']['paymentMethod']['check']) === 1 && is_numeric($request['data']['paymentMethod']['description']))
                {
                    $creditCard = $request['data']['paymentMethod']['description'];
                }
                
                $payment = 0;
                //Si hay pago de deuda se actualiza el pago y se crea un registro de deuda
                if($request['data']['debt']['check'] && intval($request['data']['debt']['description']) > 0)
                {
                    $payment = Payment::create([
                        'charged_by' => $user['employee']['id'],
                        'paymentmethod_id' => $request['data']['paymentMethod']['check'],
                        'branch_id' => $request['data']['branchID'],
                        'discount' => $discount,
                        'total' => $price,
                        'credit_card' => $creditCard,
                        'paymentstatus_id' => 2,
                        'created_by' =>$user['employee']['id'],
                        'patient_id' =>  $request['data']['patientID'],                      
                    ])->id;

                    PaymentDebt::create([
                        'payment_id' => $payment,
                        'description' => 'Primer pago de deuda',
                        'total' => $request['data']['paymentMethod']['description'],
                        'paymentmethod_id' => $request['data']['paymentMethod']['check'],
                        'credit_card' => $creditCard,
                        'charged_by' => $user['employee']['id'],
                    ]);
                }
                //Si no se cumple la condicion anterior solo se actualiza el pago
                else {
                    $payment = Payment::create([
                        'charged_by' => $user['employee']['id'],
                        'paymentmethod_id' => $request['data']['paymentMethod']['check'],
                        'branch_id' => $request['data']['branchID'],
                        'discount' => $discount,
                        'total' => $price,
                        'credit_card' => $creditCard,
                        'paymentstatus_id' => 3,
                        'created_by' =>$user['employee']['id'],
                        'patient_id' =>  $request['data']['patientID'],                      
                    ])->id;
                }

                //Guarda los productos que se cargaron
                foreach($request->input('data.products') as $value){
                    ProductPayment::create([
                        'payment_id' => $payment,
                        'product_id' => $value['id']
                    ]);
                }

                return response()->json(true, 200);
            }

            return response()->json(['errors' => [
                'permisos' => ['No puede dejar sin productos este pago, agregue por lo menos un producto']
            ]], 401);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos para modificar esta cita']
        ]], 401);
    }

    public function createPaymentByID(Request $request, $id)
    {
        $user = User::findOrFail(Auth::user()->id);
        $payment = Payment::findOrFail($id);
        if(intval($request['data']['paymentMethod']['check']) > 1 && !is_numeric($request['data']['paymentMethod']['description']))
        {
            return response()->json(['errors' => [
                'tarjeta' => ['Verifique que haya ingresado correctamente los dígitos de la tarjeta']
            ]], 401);
        }

        if($request['data']['debt']['check'] && intval($request['data']['debt']['description']) === 0)
        {
            return response()->json(['errors' => [
                'tarjeta' => ['Ingrese una cantidad en deuda para continuar, o en su defecto no seleccione la opción']
            ]], 401);
        }

        if((intval($payment['paymentstatus_id']) === 1 && $user->hasRole('Caja')) || $user->hasRole(['Administrador', 'Caja administrador']))
        {
            if(count($request->input('data.products')) > 0)
            {
                $discount = array_sum(array_column($request->input('data.products'), 'discount'));
                $price = array_sum(array_column($request->input('data.products'), 'price'));

                //Elimina los productos que hayan sido eliminados
                $productsID = array_column($request->input('data.products'), 'id');
                ProductPayment::where('payment_id', $id)->whereNotIn('product_id', $productsID)->delete();

                //Si detecta que un producto no se ha ingresado con anterioridad, guarda un nuevo registro de ese producto
                foreach($request->input('data.products') as $value){
                    $productPayment = ProductPayment::where('payment_id', $id)->where('product_id', $value['id'])->first();
                    if(!isset($productPayment))
                    {
                        ProductPayment::create([
                            'payment_id' => $id,
                            'product_id' => $value['id']
                        ]);
                    }
                }

                $creditCard = null;
                if(intval($request['data']['paymentMethod']['check']) === 1 && is_numeric($request['data']['paymentMethod']['description']))
                {
                    $creditCard = $request['data']['paymentMethod']['description'];
                }

                //Borra las deudas que coincidadn con el id del pago si no se ha se ha habilitado la opcion
                if($request['data']['debt']['check'] === false)
                {
                    PaymentDebt::where('payment_id', $id)->delete();
                }
                
                //Si hay pago de deuda se actualiza el pago y se crea un registro de deuda
                if($request['data']['debt']['check'] && intval($request['data']['debt']['description']) > 0)
                {
                    $payment->update([
                        'updated_by' => Auth::user()->id,
                        'discount' => $discount,
                        'total' => $price - $discount,
                        'paymentstatus_id' => 2,
                        'paymentmethod_id' => $request['data']['paymentMethod']['check'],
                        'credit_card' => $creditCard
                    ]);

                    PaymentDebt::create([
                        'payment_id' => $id,
                        'description' => 'Primer pago de deuda',
                        'total' => $request['data']['paymentMethod']['description'],
                        'paymentmethod_id' => $request['data']['paymentMethod']['check'],
                        'credit_card' => $creditCard,
                        'charged_by' => $user['employee']['id'],
                    ]);
                }
                //Si no se cumple la condicion anterior solo se actualiza el pago
                else {
                    $payment->update([
                        'updated_by' => Auth::user()->id,
                        'discount' => $discount,
                        'total' => $price - $discount,
                        'paymentstatus_id' => 3,
                        'paymentmethod_id' => $request['data']['paymentMethod']['check'],
                        'credit_card' => $creditCard
                    ]);
                }

                return response()->json(true, 200);
            }

            return response()->json(['errors' => [
                'permisos' => ['No puede dejar sin productos este pago, agregue por lo menos un producto']
            ]], 401);
        }

        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos para modificar esta cita']
        ]], 401);
    }

    public function setDebtPayment(PaymentDebtRequest $request, $id)
    {
        $request->validated();
        $payment = Payment::findOrFail($id);
        $user = User::findOrFail(Auth::user()->id);
        if(intval($request['paymentMethod']['check']) > 1 && !is_numeric($request['paymentMethod']['description']))
        {
            return response()->json(['errors' => [
                'tarjeta' => ['Verifique que haya ingresado correctamente los dígitos de la tarjeta']
            ]], 401);
        }

        if($user->hasRole(['Caja', 'Caja administrador', 'Administrador']))
        {
            if(intval($payment['paymentstatus_id']) === 2)
            {
                $creditCard = null;
                if(intval($request['paymentMethod']['check']) === 1 && is_numeric($request['paymentMethod']['description']))
                {
                    $creditCard = $request['data']['paymentMethod']['description'];
                }

                PaymentDebt::create([
                    'payment_id' => $id,
                    'description' => $request['descripcion'],
                    'total' => $request['cantidad'],
                    'paymentmethod_id' => $request['paymentMethod']['check'],
                    'charged_by' => $user['employee']['id'],
                    'credit_card' => $creditCard,
                ]);

                //Verifica si el pago de la deuda esta completa, si esta entonces lo marca como completado
                $payments = PaymentDebt::where('payment_id', $id)->get();
                $sumPayment = 0;
                foreach($payments as $paymentData)
                {
                    $sumPayment += intval($paymentData['total']);
                }
                if($sumPayment >= intval($payment['total']))
                {
                    $payment->update([
                        'paymentstatus_id' => 3
                    ]);
                }

                return response()->json(true, 200);
            }

            return response()->json(['errors' => [
                'permisos' => ['No puede agregar mas cobros, puesto que la deuda ya está cubierta']
            ]], 401);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getAllPayments()
    {
        $payment = Payment::all();
        return response()->json($payment);
    }

    public function getAllMissingPayments(Request $request)
    {
        $payments = [];
        $paymentData = Payment::where('paymentstatus_id', 1);
        if($request->has('query'))
        {
            $query = $request->input('query');
            $payments = $paymentData
            ->where(function ($item) use ($query){
                $item->where('id', 'like', '%'.$query.'%')
                ->orWhereHas('patient', function($items) use($query) {
                    $items->where('first_name', 'like', '%'.$query.'%')
                        ->orWhere('last_name', 'like', '%'.$query.'%')
                        ->orWhere('cellphone', 'like', '%'.$query.'%');
                });
            })
            ->paginate();
        } 
        else {
            $payments = $paymentData->paginate();
        }

        $response = [
            'pagination' => [
                'total' => $payments->total(),
                'per_page' => $payments->perPage(),
                'current_page' => $payments->currentPage(),
                'last_page' => $payments->lastPage(),
                'from' => $payments->firstItem(),
                'to' => $payments->lastItem()
            ],
            'data' => $payments->getCollection()->load('products', 'patient')
        ];

        return response()->json($response);
    }

    public function getPayment($id)
    {
        $payment = Payment::findOrFail($id);
        return response()->json($payment);
    }

    public function getAllDebtsByPaymentID($id)
    {
        $payment = PaymentDebt::where('payment_id', $id)->get()->load('paymentMethod');
        return response()->json($payment);
    }

    public function getPaymentProductsByID($id)
    {
        $products = Payment::findOrFail($id)->products;
        return response()->json($products);
    }
}
