<?php

namespace App\Models\Medical\Test;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalTestResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'medicaltest_id',
        'created_by',
        'results',
        'notes',
        'updated_by',
        'update_note',
    ];
    
    public function medicaltest()
    {
        return $this->belongsTo(MedicalTest::class, 'medicaltest_id');
    }
}