<?php

namespace App\Models\Medical\Clinical;

use App\Models\Medical\Consult\MedicalConsult;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClinicalStudy extends Model
{
    use HasFactory;

    protected $fillable = [
        'created_in',
        'scheduled_in',
        'finished_at',
        'clinicalstudystatus_id'
    ];

    public function status()
    {
        return $this->belongsTo(ClinicalStudyStatus::class, 'clinicalstudystatus_id');
    }

    public function consultcreated()
    {
        return $this->belongsTo(MedicalConsult::class, 'created_in');
    }

    public function consultscheduled()
    {
        return $this->belongsTo(MedicalConsult::class, 'scheduled_in');
    }
}
