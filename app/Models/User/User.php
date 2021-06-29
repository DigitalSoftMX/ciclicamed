<?php

namespace App\Models\User;

use App\Models\Employee\Employee;
use App\Models\Patient\Patient;
use App\Models\Patient\Preregistration;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory;
    use HasRoles;
    use Notifiable;

    protected $fillable = [
        'email',
        'password',
        'userstatus_id',
        'usercategory_id'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $guard_name = 'web';

    public function status()
    {
        return $this->belongsTo(UserStatus::class, 'userstatus_id');
    }

    public function category()
    {
        return $this->belongsTo(UserCategory::class, 'usercategory_id');
    }

    public function preregistration()
    {
        return $this->hasOne(Preregistration::class, 'user_id');
    }
    
    public function employee()
    {
        return $this->hasOne(Employee::class, 'user_id');
    }

    public function patient()
    {
        return $this->hasOneThrough(Patient::class, Preregistration::class);
    }
}
