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
        return $this->belongsTo(MedicalTestStatus::class, 'medicalteststatus_id');
    }

    public function consultCreated()
    {
        return $this->belongsTo(MedicalConsult::class, 'created_in');
    }

    public function consultScheduled()
    {
        return $this->belongsTo(MedicalConsult::class, 'scheduled_in');
    }

    public function samples()
    {
        return $this->hasMany(MedicalTestSample::class, 'medicaltest_id');
    }

    public function results()
    {
        return $this->hasMany(MedicalTestResult::class, 'medicaltest_id');
    }

    public function orders()
    {
        return $this->hasMany(MedicalTestOrder::class, 'medicaltest_id');
    }

    public function lastOrder()
    {
        return $this->hasOne(MedicalTestOrder::class, 'medicaltest_id')->orderBy('created_at', 'asc');
    }

}
