<?php

namespace App\Models\Medical\Test;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalTestSample extends Model
{
    use HasFactory;

    protected $fillable = [
        'medicaltest_id',
        'fum',
        'collected_by',
        'finish_at',
        'sent_by',
        'sent_at',
        'updated_by',
        'update_note',
        'medicalteststatus_id'
    ];

    public function status()
    {
        return $this->belongsTo(MedicalTestStatus::class, 'medicalteststatus_id');
    }

    public function medicaltest()
    {
        return $this->belongsTo(MedicalTest::class, 'medicaltest_id');
    }
}
