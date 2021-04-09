<?php

namespace App\Models\Medical\Attachment;

use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\MedicalSpecialty;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalAttachmentForm extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'medicalspecialty_id'
    ];

    public function medicalspecialty()
    {
        return $this->belongsTo(MedicalSpecialty::class);
    }

    public function medicalconsultattachments()
    {
        return $this->belongsToMany(MedicalConsult::class, 'medical_attachments', 'medicalattachmentform_id', 'medicalconsult_id')
                    ->withPivot('data', 'updated_by', 'update_note');
    }

    public function medicalconsultfollowupsattachtments()
    {
        return $this->belongsToMany(MedicalConsult::class, 'medical_attachment_follow_ups', 'medicalattachmentform_id', 'medicalconsult_id')
                    ->withPivot('data', 'updated_by', 'update_note');
    }
}
