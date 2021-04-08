<?php

namespace App\Models\Patient;

use App\Models\User\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'gender',
        'birthday',
        'address',
        'phone',
        'celular',
        'email',
        'photo',
        'preregistration_id'
    ];

    public function preregistration()
    {
        return $this->belongsTo(Preregistration::class);
    }

    public function invoicedata()
    {
        return $this->hasMany(InvoiceData::class);
    }
}
