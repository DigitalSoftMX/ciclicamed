<?php

namespace App\Models\Payment;

use App\Models\Employee\Employee;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Patient\Patient;
use App\Models\Product\Product;
use App\Models\Product\ProductPayment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'created_by',
        'updated_by',
        'charged_by',
        'paymentmethod_id',
        'branch_id',
        'discount',
        'total',
        'credit_card',
        'paymentstatus_id',
        'patient_id'
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class. 'patient_id');
    }

    public function chargedBy()
    {
        return $this->belongsTo(Employee::class, 'charged_by');
    }

    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'paymentmethod_id');
    }

    public function status()
    {
        return $this->belongsTo(PaymentStatus::class, 'paymentstatus_id');
    }

    public function debts()
    {
        return $this->hasMany(PaymentDebt::class, 'payment_id');
    }

    public function lastDebtPayment()
    {
        return $this->hasOne(PaymentDebt::class, 'payment_id')->orderBy('created_at', 'asc');
    }

    public function medicalConsults()
    {
        return $this->belongsToMany(MedicalConsult::class, ProductPayment::class, 'payment_id', 'medicalconsult_id');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_payments', 'payment_id', 'product_id')->withPivot('consult_created', 'consult_scheduled', 'checkup_id')->as('payment');
    }
}