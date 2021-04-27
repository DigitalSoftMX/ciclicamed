<?php

namespace App\Http\Controllers\Branch;

use App\Http\Controllers\Controller;
use App\Models\Branch\Branch;
use App\Models\Employee\EmployeeSchedule;
use App\Models\Medical\MedicalSpecialty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BranchController extends Controller
{
    public function getAllBranches()
    {
        $branches = Branch::all();
        return response()->json($branches);
    }

    public function getDoctorsAllSpecialties($id)
    {
        DB::statement("SET SQL_MODE=''");
        $specialties = MedicalSpecialty::with(['doctors' => function($query) use ($id){
            $query->whereHas('schedules', function($query) use($id) {
                $query->where('branch_id', $id)->groupBy('branch_id', 'employee_id');
            })->groupBy('employee_id', 'medicalspecialty_id')->orderBy('employees.last_name', 'ASC');
        }])->get();
        return response()->json($specialties);
    }

}
