<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Models\Patient\Patient;
use App\Models\Payment\Payment;
use App\Models\Payment\PaymentStatus;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function getAllPayments()
    {
        $payment = Payment::all();
        return response()->json($payment);
    }

    public function getPatientsWithDebts()
    {
        $status = PaymentStatus::where('name', 'Deuda')->first()->id;
        $payment = Patient::whereHas('payments', function($query) use($status) {
            $query->where('paymentstatus_id', $status);
        })->get();

        return response()->json($payment);
    }

    public function getAllPaymentsWithDebts(Request $request)
    {
        $status = PaymentStatus::where('name', 'Deuda')->first()->id;
        $payment = Patient::whereHas('payments', function($query) use($status) {
            $query->where('paymentstatus_id', $status);
        })->get();

        // $paymentDebts = [];
        // if($request->has('query'))
        // {
        //     $queryData = $request->input('query');
        //     $paymentDebts = $payment->whereHas('patient', function($query) use($queryData) {
        //         $query->where('first_name', 'like', '%'.$queryData.'%')
        //               ->orWhere('last_name', 'like', '%'.$queryData.'%');
        //     })->paginate();
        // } else {
        //     $paymentDebts = $payment->paginate();
        // }
        
        // $response = [
        //     'pagination' => [
        //         'total' => $paymentDebts->total(),
        //         'per_page' => $paymentDebts->perPage(),
        //         'current_page' => $paymentDebts->currentPage(),
        //         'last_page' => $paymentDebts->lastPage(),
        //         'from' => $paymentDebts->firstItem(),
        //         'to' => $paymentDebts->lastItem()
        //     ],
        //     'data' => $paymentDebts->load('patient')
        // ];

        return response()->json($payment);
    }
}
