<?php

namespace App\Models\Checkup;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkup extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
    ];
}
