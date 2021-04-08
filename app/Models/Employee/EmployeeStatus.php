<?php

namespace App\Models\Employee;

use App\Models\Medical\MedicalSpecialty;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeStatus extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'color'
    ];
    
    public function employee()
    {
        return $this->hasOne(Employee::class);
    }

}
