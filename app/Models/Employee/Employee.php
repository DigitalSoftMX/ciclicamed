<?php

namespace App\Models\Employee;

use App\Models\Branch\Branch;
use App\Models\Medical\MedicalSpecialty;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'gender',
        'birthday',
        'address',
        'phone',
        'celular',
        'email',
        'photo',
        'employeestatus_id',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function employeestatus()
    {
        return $this->belongsTo(EmployeeStatus::class);
    }

    public function medicalspecialties()
    {
        return $this->belongsToMany(MedicalSpecialty::class, 'employee_licenses', 'employee_id', 'medicalspecialty_id')->withPivot('degree_title', 'licence_number');
    }

    public function branches()
    {
        return $this->belongsToMany(Branch::class, 'employee_schedules', 'employee_id', 'branch_id')->withPivot('start_day', 'start_time', 'finish_day', 'finish_time');
    }

}
