<?php

namespace App\Models\Medical\Test;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalTest extends Model
{
    use HasFactory;

    protected $fillable = [
        'created_in',
        'scheduled_in',
        'finished_at',
        'medicalteststatus_id'
    ];

    public function status()
    {
        return $this->belongsTo(MedicalStudyStatus::class, 'medicalteststatus_id');
    }

    public function consultcreated()
    {
        return $this->belongsTo(MedicalConsult::class, 'created_in');
    }

    public function consultscheduled()
    {
        return $this->belongsTo(MedicalConsult::class, 'scheduled_in');
    }

    public function medicalsamples()
    {
        return $this->hasMany(MedicalStudySample::class, 'medicaltest_id');
    }

    public function medicalresults()
    {
        return $this->hasMany(MedicalTestResult::class, 'medicaltest_id');
    }

    public function medicalorder()
    {
        return $this->hasMany(MedicalTestOrder::class, 'medicaltest_id');
    }
}
