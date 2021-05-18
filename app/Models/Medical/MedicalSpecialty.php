<?php

namespace App\Models\Medical;

use App\Models\Employee\Employee;
use App\Models\Employee\EmployeeLicense;
use App\Models\Medical\Attachment\MedicalAttachment;
use App\Models\Medical\Attachment\MedicalAttachmentFollowUp;
use App\Models\Medical\Attachment\MedicalAttachmentForm;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalSpecialty extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name'
    ];

    public function doctors()
    {
        return $this->belongsToMany(Employee::class, 'employee_licenses', 'medicalspecialty_id', 'employee_id')->withPivot('degree_title', 'license_number');
    }

    public function medicalAttachment()
    {
        return $this->hasMany(MedicalAttachment::class);
    }

    public function medicalFollowUp()
    {
        return $this->hasMany(MedicalAttachmentFollowUp::class);
    }
}
