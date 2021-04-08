<?php

namespace App\Models\Medical;

use App\Models\Employee\Employee;
use App\Models\Employee\EmployeeLicense;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalSpecialty extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'employee_licenses', 'medicalspecialty_id', 'employee_id')->withPivot('degree_title', 'licence_number');
    }
}
