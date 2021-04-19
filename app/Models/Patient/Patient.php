<?php

namespace App\Models\Patient;

use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Prescription\MedicalPrescription;
use App\Models\Payment\Payment;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'gender',
        'birthday',
        'address',
        'phone',
        'cellphone',
        'email',
        'photo',
        'preregistration_id'
    ];

    public function preregistration()
    {
        return $this->belongsTo(Preregistration::class);
    }

    public function invoicedata()
    {
        return $this->hasMany(InvoiceData::class);
    }

    public function medicalconsults()
    {
        return $this->hasMany(MedicalConsult::class);
    }

    public function prescriptions()
    {
        return $this->hasManyThrough(MedicalPrescription::class, MedicalConsult::class, 'patient_id', 'medicalconsult_id');
    }

    public function payments()
    {
        return $this->hasMany(Payment::class, 'patient_id');
    }
}
