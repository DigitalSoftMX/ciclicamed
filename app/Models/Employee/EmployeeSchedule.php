<?php

namespace App\Models\Employee;

use App\Models\Branch\Branch;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'start_day',
        'start_time',
        'finish_day',
        'finish_time',
        'branch_id'
    ];

    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'employee_licenses', 'medicalspecialty_id', 'employee_id')->withPivot('degree_title', 'licence_number');
    }

    public function branches()
    {
        return $this->belongsToMany(Branch::class, 'employee_schedules', 'employee_id', 'branch_id')->withPivot('start_day', 'start_time', 'finish_day', 'finish_time');
    }
}
