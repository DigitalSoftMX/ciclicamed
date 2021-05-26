<?php

namespace App\Models\Patient;

use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Prescription\MedicalPrescription;
use App\Models\Medical\Test\MedicalTest;
use App\Models\Payment\Payment;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_code',
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

    protected $perPage = 10;

    public function preregistration()
    {
        return $this->belongsTo(Preregistration::class, 'preregistration_id');
    }

    public function invoiceData()
    {
        return $this->hasMany(InvoiceData::class, 'patient_id');
    }

    public function medicalConsults()
    {
        return $this->hasMany(MedicalConsult::class, 'patient_id');
    }

    public function prescriptions()
    {
        return $this->hasManyThrough(MedicalPrescription::class, MedicalConsult::class, 'patient_id', 'medicalconsult_id');
    }

    public function payments()
    {
        return $this->hasMany(Payment::class, 'patient_id');
    }

    public function medicalTestsCreated()
    {
        return $this->hasManyThrough(MedicalTest::class, MedicalConsult::class, 'patient_id', 'created_in');
    }

    public function medicalTestsScheduled()
    {
        return $this->hasManyThrough(MedicalTest::class, MedicalConsult::class, 'patient_id', 'scheduled_in');
    }
}
