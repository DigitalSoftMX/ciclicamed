<?php

namespace App\Models\Branch;

use App\Models\Employee\Employee;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'phone',
        'opening_hours'
    ];

    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'employee_schedules', 'branch_id', 'employee_id')->withPivot('start_day', 'start_time', 'finish_day', 'finish_time');
    }
}
