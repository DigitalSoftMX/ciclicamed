<?php

namespace App\Models\Medical\Consult;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalConsultStatus extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'color'
    ];

    public function medicalconsults()
    {
        return $this->hasMany(MedicalConsult::class);
    }
}
