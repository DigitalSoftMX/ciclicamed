<?php

namespace App\Models\Branch;

use App\Models\Employee\Employee;
use App\Models\Employee\EmployeeCategory;
use App\Models\Medical\Consult\MedicalConsult;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;
    use \Staudenmeir\EloquentHasManyDeep\HasRelationships;

    protected $fillable = [
        'name',
        'address',
        'phone',
        'opening_hours'
    ];

    public function employeesSchedules()
    {
        return $this->belongsToMany(Employee::class, 'employee_schedules', 'branch_id', 'employee_id')->withPivot('start_day', 'start_time', 'finish_day', 'finish_time');
    }

    public function employeesdaysoff()
    {
        return $this->belongsToMany(Employee::class, 'employee_days_off', 'branch_id', 'employee_id')->withPivot('day_off', 'start_time', 'finish_time');
    }

    public function medicalConsult()
    {
        return $this->hasMany(MedicalConsult::class, 'branch_id');
    }

    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'employee_schedules', 'branch_id', 'employee_id');
    }

}
