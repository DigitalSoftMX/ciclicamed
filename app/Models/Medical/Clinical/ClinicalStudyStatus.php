<?php

namespace App\Models\Medical\Clinical;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClinicalStudyStatus extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'color'
    ];

    public function studies()
    {
        return $this->hasMany(ClinicalStudy::class, 'clinicalstudystatus_id');
    }
}
