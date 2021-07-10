<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Payment\PaymentDebtRequest;
use App\Models\Patient\Patient;
use App\Models\Payment\Payment;
use App\Models\Payment\PaymentDebt;
use App\Models\Payment\PaymentStatus;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    public function setDebtPayment(PaymentDebtRequest $request, $id)
    {
        $request->validated();
        $payment = Payment::findOrFail($id);
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole(['Caja', 'Caja administrador', 'Administrador']))
        {
            if(intval($payment['paymentstatus_id']) === 2)
            {
                PaymentDebt::create([
                    'payment_id' => $id,
                    'description' => $request['descripcion'],
                    'total' => $request['cantidad'],
                    'paymentmethod_id' => $request['formaPago'],
                    'charged_by' => $user['employee']['id'],
                    'credit_card' => $request['tarjeta'],
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
                $item->whereHas('products', function($items) use($query) {
                    $items->where('productcategory_id', $this->testCategory());
                })
                ->where('test_code', 'like', '%'.$query.'%')
                ->orWhereHas('products', function($items) use($query) {
                    $filter = $items->where('productcategory_id', $this->testCategory());
                    $filter->where(function($item) use($query){
                        $item->where('name', 'like', '%'.$query.'%')
                        ->orWhere('product_code', 'like', '%'.$query.'%')
                        ->orWhere('supplier_code', 'like', '%'.$query.'%');
                    });
                });
            })
            ->paginate();
        } else {
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
            'data' => $payments->getCollection()->load('products')
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
