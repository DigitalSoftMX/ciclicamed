<?php

namespace App\Models\Medical\Prescription;

use App\Models\Medical\Consult\MedicalConsult;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicament extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'generic_name',
        'presentation'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];


    public function medicalconsults()
    {
        return $this->belongsToMany(MedicalConsult::class, 'medical_prescriptions', 'medicament_id', 'medicalconsult_id')
                    ->withPivot('dose', 'rate', 'duration', 'update_note');
    }

    public function prescription()
    {
        return $this->hasMany(MedicalPrescription::class, 'medicament_id');
    }
}
