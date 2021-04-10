<?php

namespace App\Models\Medical\Consult;

use App\Models\Employee\Employee;
use App\Models\Medical\Attachment\MedicalAttachment;
use App\Models\Medical\Attachment\MedicalAttachmentFollowUp;
use App\Models\Medical\Attachment\MedicalAttachmentForm;
use App\Models\Medical\Clinical\ClinicalStudy;
use App\Models\Medical\History\MedicalHistory;
use App\Models\Medical\Prescription\MedicalPrescription;
use App\Models\Medical\Prescription\Medicament;
use App\Models\Patient\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalConsult extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'created_by',
        'medicalconsulttype_id',
        'medicalconsultstatus_id',
        'is_confirmed',
        'consult_reason',
        'consult_date',
        'consult_start_time',
        'consult_finish_time',
        'branch_id',
        'updated_by',
        'update_note'
    ];
    
    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function doctor()
    {
        return $this->belongsTo(Employee::class, 'created_by');
    }

    public function type()
    {
        return $this->belongsTo(MedicalConsultType::class, 'medicalconsulttype_id');
    }

    public function status()
    {
        return $this->belongsTo(MedicalConsultStatus::class, 'medicalconsultstatus_id');
    }

    public function attachments()
    {
        return $this->belongsToMany(MedicalAttachmentForm::class, 'medical_attachments', 'medicalconsult_id', 'medicalattachmentform_id')
                    ->withPivot('data', 'updated_by', 'update_note');
    }

    public function followups()
    {
        return $this->belongsToMany(MedicalAttachmentForm::class, 'medical_attachment_follow_ups', 'medicalconsult_id', 'medicalattachmentform_id')
                    ->withPivot('data', 'updated_by', 'update_note');
    }

    public function histories()
    {
        return $this->hasMany(MedicalHistory::class, 'medicalconsult_id');
    }

    public function medicaments()
    {
        return $this->belongsToMany(Medicament::class, 'medical_prescriptions', 'medicalconsult_id', 'medicament_id')
                    ->withPivot('dose', 'rate', 'duration', 'update_note');
    }

    public function studiescreated()
    {
        return $this->hasMany(ClinicalStudy::class, 'created_in');
    }

    public function studyscheduled()
    {
        return $this->hasOne(ClinicalStudy::class, 'scheduled_in');
    }
}
