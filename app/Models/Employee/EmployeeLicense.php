<?php

namespace App\Models\Employee;

use App\Models\Medical\MedicalSpecialty;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeLicense extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'degree_title',
        'license_number',
        'school_name',
        'medicalspecialty_id'
    ];

    public function employees()
    {
        return $this->belongsToMany(Employee::class)->withPivot('degree_title', 'license_number');
    }

    public function medicalspecialties()
    {
        return $this->belongsToMany(MedicalSpecialty::class)->withPivot('degree_title', 'license_number');
    }
}
