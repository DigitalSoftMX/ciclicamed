<?php

namespace App\Models\Medical\Consult;

use App\Models\Branch\Branch;
use App\Models\Employee\Employee;
use App\Models\Medical\Attachment\MedicalAttachment;
use App\Models\Medical\Attachment\MedicalAttachmentFollowUp;
use App\Models\Medical\Attachment\MedicalAttachmentForm;
use App\Models\Medical\Clinical\ClinicalStudy;
use App\Models\Medical\History\MedicalHistory;
use App\Models\Medical\MedicalSpecialty;
use App\Models\Medical\Prescription\MedicalPrescription;
use App\Models\Medical\Prescription\Medicament;
use App\Models\Medical\Study\MedicalStudy;
use App\Models\Medical\Study\MedicalStudySample;
use App\Models\Medical\Test\MedicalTest;
use App\Models\Medical\Test\MedicalTestOrder;
use App\Models\Medical\Test\MedicalTestResult;
use App\Models\Medical\Test\MedicalTestSample;
use App\Models\Patient\Patient;
use App\Models\Payment\Payment;
use App\Models\Product\Product;
use App\Models\Product\ProductPayment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalConsult extends Model
{
    use HasFactory;
    use \Staudenmeir\EloquentHasManyDeep\HasRelationships;

    protected $fillable = [
        'patient_id',
        'doctor_id',
        'created_by',
        'medicalconsultcategory_id',
        'medicalconsultstatus_id',
        'consult_reason',
        'consult_schedule_start',
        'consult_schedule_finish',
        'consult_start_at',
        'consult_finish_at',
        'branch_id',
        'medicalspecialty_id',
        'checkup_id',
        'updated_by',
        'update_note'
    ];

    protected $perPage = 10;
    
    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function doctor()
    {
        return $this->belongsTo(Employee::class, 'doctor_id');
    }

    public function type()
    {
        return $this->belongsTo(MedicalConsultCategory::class, 'medicalconsultcategory_id');
    }

    public function status()
    {
        return $this->belongsTo(MedicalConsultStatus::class, 'medicalconsultstatus_id');
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_id');
    }

    public function followUps()
    {
        return $this->belongsToMany(MedicalSpecialty::class, 'medical_attachment_follow_ups', 'medicalconsult_id', 'medicalspecialty_id')
                    ->as('followUp')
                    ->withPivot('data', 'updated_by', 'update_note');
    }

    public function followUp()
    {
        return $this->followUps()->orderBy('created_at', 'desc');
    }

    public function histories()
    {
        return $this->hasMany(MedicalHistory::class, 'medicalconsult_id');
    }

    public function history()
    {
        return $this->hasOne(MedicalHistory::class, 'medicalconsult_id')->orderBy('created_at', 'desc');
    }

    public function prescriptions()
    {
        return $this->hasMany(MedicalPrescription::class, 'medicalconsult_id');
    }

    public function medicaments()
    {
        return $this->belongsToMany(Medicament::class, 'medical_prescriptions', 'medicalconsult_id', 'medicament_id')
                    ->withPivot('dose', 'rate', 'duration', 'update_note');
    }

    public function testsCreated()
    {
        return $this->hasMany(MedicalTest::class, 'created_in');
    }

    public function testScheduled()
    {
        return $this->hasOne(MedicalTest::class, 'scheduled_in');
    }

    public function testOrderScheduled()
    {
        return $this->hasOneThrough(MedicalTestOrder::class, MedicalTest::class, 'scheduled_in', 'medicaltest_id');
    }

    public function testSamplesCreated()
    {
        return $this->hasManyThrough(MedicalTestSample::class, MedicalTest::class, 'created_in', 'medicaltest_id');
    }

    public function testSamplesScheduled()
    {
        return $this->hasManyThrough(MedicalTestSample::class, MedicalTest::class, 'scheduled_in', 'medicaltest_id');
    }

    public function testResultsCreated()
    {
        return $this->hasManyThrough(MedicalTestResult::class, MedicalTest::class, 'created_in', 'medicaltest_id');
    }

    public function testResultsScheduled()
    {
        return $this->hasManyThrough(MedicalTestResult::class, MedicalTest::class, 'scheduled_in', 'medicaltest_id');
    }

    public function productPayments()
    {
        return $this->belongsToMany(Product::class, 'product_payments', 'medicalconsult_id', 'product_id')->withPivot('payment_id');
    }

    public function specialties()
    {
        return $this->belongsTo(MedicalSpecialty::class, 'medicalspecialty_id');
    }

    public function specialty()
    {
        return $this->belongsTo(MedicalSpecialty::class, 'medicalspecialty_id')->orderBy('created_at', 'desc');
    }

    public function paymentCreated()
    {
        return $this->hasOne(ProductPayment::class, 'consult_created');
    }
}
