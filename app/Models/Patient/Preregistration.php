<?php

namespace App\Models\Patient;

use App\Models\User\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Preregistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'business_name',
        'has_children',
        'children_total',
        'user_id'
    ];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function patient()
    {
        return $this->hasOne(Patient::class);
    }
}
