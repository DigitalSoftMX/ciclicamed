<?php

namespace App\Models\Medical\Test;

use App\Models\Checkup\Checkup;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Patient\Patient;
use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalTest extends Model
{
    use HasFactory;
    use \Staudenmeir\EloquentEagerLimit\HasEagerLimit;
    use \Znck\Eloquent\Traits\BelongsToThrough;

    protected $fillable = [
        'created_in',
        'scheduled_in',
        'finished_at',
        'medicalteststatus_id'
    ];

    protected $perPage = 10;

    public function status()
    {
        return $this->belongsTo(MedicalTestStatus::class, 'medicalteststatus_id');
    }

    public function consultCreated()
    {
        return $this->belongsTo(MedicalConsult::class, 'created_in');
    }

    public function consultScheduled()
    {
        return $this->belongsTo(MedicalConsult::class, 'scheduled_in');
    }

    public function samples()
    {
        return $this->hasMany(MedicalTestSample::class, 'medicaltest_id');
    }

    public function results()
    {
        return $this->hasMany(MedicalTestResult::class, 'medicaltest_id');
    }

    public function orders()
    {
        return $this->hasMany(MedicalTestOrder::class, 'medicaltest_id');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'medical_test_orders', 'medicaltest_id', 'product_id');
    }

    public function order()
    {
        return $this->hasOne(MedicalTestOrder::class, 'medicaltest_id')->orderBy('created_at', 'desc');
    }

    public function result()
    {
        return $this->hasOne(MedicalTestResult::class, 'medicaltest_id')->orderBy('created_at', 'desc');
    }

    public function patient()
    {
        return $this->belongsToThrough(Patient::class, MedicalConsult::class, 'patient_id', '', [MedicalConsult::class => 'scheduled_in']);
    }

    public function checkup()
    {
        return $this->belongsTo(Checkup::class, 'checkup_id');
    }

}
