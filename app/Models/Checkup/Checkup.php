<?php

namespace App\Models\Checkup;

use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Test\MedicalTest;
use App\Models\Medical\Test\MedicalTestOrder;
use App\Models\Patient\Patient;
use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkup extends Model
{
    use HasFactory;
    use \Staudenmeir\EloquentHasManyDeep\HasRelationships;
    
    protected $fillable = [
        'name',
        'patient_id',
        'checkupcategory_id',
        'checkupstatus_id'
    ];

    protected $perPage = 10;

    public function status()
    {
        return $this->belongsTo(CheckupStatus::class, 'checkupstatus_id');
    }

    public function category()
    {
        return $this->belongsTo(CheckupCategory::class, 'checkupcategory_id');
    }

    public function consults()
    {
        return $this->hasMany(MedicalConsult::class, 'checkup_id');
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function order()
    {
        return $this->hasOneDeep(MedicalTestOrder::class, [MedicalConsult::class, MedicalTest::class], ['checkup_id', 'scheduled_in', 'medicaltest_id']);
    }
}
