<?php

namespace App\Models\Medical\Test;

use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalTestOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'medicaltest_id',
        'product_id',
        'updated_by',
        'updated_note'
    ];


    public function medicaltest()
    {
        return $this->belongsTo(MedicalTest::class, 'medicaltest_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
