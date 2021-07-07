<?php

namespace App\Models\Product;

use App\Models\Payment\Payment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductPayment extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'consult_created',
        'consult_scheduled',
        'checkup_id',
        'payment_id',
        'product_id'
    ];

    public function payment()
    {
        return $this->belongsTo(Payment::class, 'payment_id');
    }
}
