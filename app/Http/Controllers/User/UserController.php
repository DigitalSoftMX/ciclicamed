<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getInfo()
    {
        $userCategory = User::find(1)->category;
        $user = $userCategory->name === 'paciente' ? User::with('category')->find(1)->patient : User::with('category')->find(1)->employee;
        return view('user.user-profile', [
            'user' => $user,
            'category' => $userCategory
        ]);
    }
}
