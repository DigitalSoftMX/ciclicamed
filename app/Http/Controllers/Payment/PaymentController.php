<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Models\Patient\Patient;
use App\Models\Payment\Payment;
use App\Models\Payment\PaymentDebt;
use App\Models\Payment\PaymentStatus;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function getAllPayments()
    {
        $payment = Payment::all();
        return response()->json($payment);
    }

    public function getAllDebtsByPaymentID($id)
    {
        $payment = PaymentDebt::where('payment_id', $id)->get()->load('paymentMethod');
        return response()->json($payment);
    }
}
