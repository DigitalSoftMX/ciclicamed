<?php

namespace App\Models\Checkup;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CheckupCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'checkupcategory_id',
        'patient_id'
    ];
}
