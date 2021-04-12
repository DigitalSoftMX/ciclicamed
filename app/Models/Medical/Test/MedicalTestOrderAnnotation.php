<?php

namespace App\Models\Medical\Test;

use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalTestOrderAnnotation extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'annotation'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
    
}
