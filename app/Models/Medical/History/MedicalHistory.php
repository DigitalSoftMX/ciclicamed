<?php

namespace App\Models\Medical\History;

use App\Models\Employee\Employee;
use App\Models\Medical\Consult\MedicalConsult;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'medicalconsult_id',
        'data',
        'updated_by',
        'update_note'
    ];

    public function medicalconsult()
    {
        return $this->belongsTo(MedicalConsult::class, 'medicalconsult_id');
    }

}
