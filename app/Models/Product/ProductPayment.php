<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductPayment extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'medicalconsult_id',
        'payment_id',
        'product_id'
    ];
}
