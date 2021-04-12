<?php

namespace App\Models\Medical\Test;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalTestStatus extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'color'
    ];

    public function studies()
    {
        return $this->hasMany(MedicalStudy::class, 'medicalteststatus_id');
    }
}
