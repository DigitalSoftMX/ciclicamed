<?php

namespace App\Models\User;

use App\Models\User\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserStatus extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'color'
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
