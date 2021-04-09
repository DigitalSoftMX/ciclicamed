<?php

namespace App\Models\Medical\Attachment;

use App\Models\Employee\Employee;
use App\Models\Medical\Consult\MedicalConsult;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalAttachment extends Model
{
    use HasFactory;

    protected $fillable = [
        'medicalconsult_id',
        'data',
        'medicalattachmentform_id',
        'updated_by',
        'update_note'
    ];

    public function medicalconsult()
    {
        return $this->belongsTo(MedicalConsult::class);
    }

    public function medicalattachmmentform()
    {
        return $this->belongsTo(MedicalAttachmentForm::class);
    }
}
