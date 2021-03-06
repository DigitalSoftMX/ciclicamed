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
        'administration_type',
        'rate',
        'duration',
        'updated_by',
        'update_note'
    ];

    protected $perPage = 10;

    public function medicalconsult()
    {
        return $this->belongsTo(MedicalConsult::class, 'medicalconsult_id');
    }

    public function medicament()
    {
        return $this->belongsTo(Medicament::class);
    }

}
