<?php

namespace App\Models\Employee;

use App\Models\Branch\Branch;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeDayOff extends Model
{
    use HasFactory;

    protected $table = 'employee_days_off';

    protected $fillable = [
        'employee_id',
        'day_off',
        'start_time',
        'finish_time',
        'branch_id'
    ];

    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'employee_days_off', 'medicalspecialty_id', 'employee_id')->withPivot('degree_title', 'licence_number');
    }

    public function branches()
    {
        return $this->belongsToMany(Branch::class, 'employee_days_off', 'employee_id', 'branch_id')->withPivot('start_day', 'start_time', 'finish_day', 'finish_time');
    }
}
