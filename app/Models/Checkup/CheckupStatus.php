<?php

namespace App\Models\Checkup;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CheckupStatus extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
    ];

    public function checkups()
    {
        return $this->hasMany(Checkup::class, 'checkupstatus_id');
    }
}
