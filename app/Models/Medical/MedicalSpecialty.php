<?php

namespace App\Models\Medical;

use App\Models\Employee\Employee;
use App\Models\Employee\EmployeeLicense;
use App\Models\Medical\Attachment\MedicalAttachmentForm;
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

    public function medicalattachmentform()
    {
        return $this->hasOne(MedicalAttachmentForm::class);
    }
}
