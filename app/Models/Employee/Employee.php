<?php

namespace App\Models\Employee;

use App\Models\Branch\Branch;
use App\Models\Medical\Attachment\MedicalAttachment;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\History\MedicalHistory;
use App\Models\Medical\MedicalSpecialty;
use App\Models\Medical\Prescription\MedicalPrescription;
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
        'cellphone',
        'email',
        'photo',
        'employeecategory_id',
        'employeestatus_id',
        'user_id',
    ];

    protected $hidden= ['pivot'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(EmployeeCategory::class, 'employeecategory_id');
    }

    public function status()
    {
        return $this->belongsTo(EmployeeStatus::class, 'employeestatus_id');
    }

    public function specialties()
    {
        return $this->belongsToMany(MedicalSpecialty::class, 'employee_licenses', 'employee_id', 'medicalspecialty_id')->withPivot('degree_title', 'licence_number');
    }

    public function schedules()
    {
        return $this->belongsToMany(Branch::class, 'employee_schedules', 'employee_id', 'branch_id')->withPivot('start_day', 'start_time', 'finish_day', 'finish_time');
    }

    public function daysoff()
    {
        return $this->belongsToMany(Branch::class, 'employee_days_off', 'employee_id', 'branch_id')->withPivot('day_off', 'start_time', 'finish_time');
    }

    public function medicalconsults()
    {
        return $this->hasMany(MedicalConsult::class, 'doctor_id');
    }

}
