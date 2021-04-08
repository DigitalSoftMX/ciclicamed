<?php

namespace App\Models\Patient;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceData extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'business_name',
        'rfc',
        'email',
        'phone',
        'cfdi',
        'country'
    ];

    public function patients()
    {
        return $this->belongsTo(Patient::class);
    }
}
