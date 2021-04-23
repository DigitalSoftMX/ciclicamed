<?php

namespace App\Http\Controllers\Branch;

use App\Http\Controllers\Controller;
use App\Models\Branch\Branch;
use App\Models\Employee\EmployeeSchedule;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    public function getBranchDoctors($id)
    {
        $doctors = EmployeeSchedule::where('branch_id', $id);
        return response()->json($doctors);
    }
}
