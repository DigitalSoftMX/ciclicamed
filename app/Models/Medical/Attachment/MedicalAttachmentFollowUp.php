<?php

namespace App\Models\Medical\Attachment;

use App\Models\Medical\MedicalSpecialty;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class MedicalAttachmentFollowUp extends Model
{
    use HasFactory;

    protected $fillable = [
        'medicalconsult_id',
        'data',
        'medicalspecialty_id',
        'updated_by',
        'update_note'
    ];

    public function consult()
    {
        return $this->belongsTo(MedicalConsult::class);
    }

    public function specialty()
    {
        return $this->belongsTo(MedicalSpecialty::class);
    }
}
