<?php

namespace App\Models\Checkup;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CheckupCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function checkups()
    {
        return $this->hasMany(Checkup::class, 'checkupcategory_id');
    }
}
