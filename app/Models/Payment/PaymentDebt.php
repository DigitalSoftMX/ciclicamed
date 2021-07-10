<?php

namespace App\Models\Payment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentDebt extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'payment_id',
        'description',
        'total',
        'missing_payment',
        'paymentmethod_id',
        'charged_by',
        'credit_card',
    ];

    public function payment()
    {
        return $this->belongsTo(Payment::class, 'payment_id');
    }

    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'paymentmethod_id');
    }
}
