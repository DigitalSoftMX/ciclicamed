<?php

namespace App\Models\Medical\Prescription;

use App\Models\Employee\Employee;
use App\Models\Medical\Consult\MedicalConsult;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalPrescription extends Model
{
    use HasFactory;

    protected $fillable = [
        'medicalconsult_id',
        'medicament_id',
        'administation_type',
        'rate',
        'duration',
        'updated_by',
        'update_note'
    ];

    public function medicalconsult()
    {
        return $this->belongsTo(MedicalConsult::class, 'medicalconsult_id');
    }

    public function medicament()
    {
        return $this->belongsTo(Medicament::class);
    }

}
