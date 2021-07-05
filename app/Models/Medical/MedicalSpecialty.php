<?php

namespace App\Models\Medical;

use App\Models\Employee\Employee;
use App\Models\Employee\EmployeeLicense;
use App\Models\Medical\Attachment\MedicalAttachment;
use App\Models\Medical\Attachment\MedicalAttachmentFollowUp;
use App\Models\Medical\Attachment\MedicalAttachmentForm;
use App\Models\Medical\Consult\MedicalConsult;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalSpecialty extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $perPage = 10;

    protected $fillable = [
        'name'
    ];

    public function doctors()
    {
        return $this->belongsToMany(Employee::class, 'employee_licenses', 'medicalspecialty_id', 'employee_id')->withPivot('degree_title', 'license_number');
    }

    public function attachment()
    {
        return $this->hasMany(MedicalAttachment::class);
    }

    public function followUp()
    {
        return $this->hasMany(MedicalAttachmentFollowUp::class);
    }

    public function consults()
    {
        return $this->hasMany(MedicalConsult::class, 'medicalspecialty_id');
    }
}
