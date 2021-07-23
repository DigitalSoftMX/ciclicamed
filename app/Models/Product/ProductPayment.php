<?php

namespace App\Models\Product;

use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Payment\Payment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Alexmg86\LaravelSubQuery\Traits\LaravelSubQueryTrait;
class ProductPayment extends Model
{
    use HasFactory;
    use LaravelSubQueryTrait;

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

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function consultCreated()
    {
        return $this->belongsTo(MedicalConsult::class, 'consult_created');
    }
}
