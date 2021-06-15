<?php

namespace App\Models\Payment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
    ];

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function debts()
    {
        return $this->hasMany(PaymentDebt::class);
    }
}
