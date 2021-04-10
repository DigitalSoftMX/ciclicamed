<?php

namespace App\Models\Medical\Consult;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalConsultType extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name'
    ];

    public function medicalconsults()
    {
        return $this->hasMany(MedicalConsult::class);
    }
    
}
