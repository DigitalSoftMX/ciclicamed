<?php

namespace App\Models\Product;

use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Test\MedicalTestOrderAnnotation;
use App\Models\Payment\Payment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_code',
        'lans_code',
        'name',
        'unit',
        'quantity_available',
        'price',
        'discount',
        'productcategory_id',
        'productstatus_id'
    ];

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'productcategory_id');
    }

    public function status()
    {
        return $this->belongsTo(ProductCategory::class, 'productstatus_id');
    }

    public function medicalconsults()
    {
        return $this->belongsToMany(MedicalConsult::class, 'product_payments', 'product_id', 'medicalconsult_id')->withPivot('payment_id');
    }

    public function payments()
    {
        return $this->belongsToMany(Payment::class, 'product_payments', 'product_id', 'payment_id')->withPivot('medicalconsult_id');;
    }

    public function testorderannotations()
    {
        return $this->hasMany(MedicalTestOrderAnnotation::class, 'product_id');
    }
}