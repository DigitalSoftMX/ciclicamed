<?php

namespace App\Http\Controllers\Checkup;

use App\Http\Controllers\Controller;
use App\Models\Checkup\CheckupCategory;
use Illuminate\Http\Request;

class CheckupCategoryController extends Controller
{
    public function getAllCategories()
    {
        $categories = CheckupCategory::all();
        return response()->json($categories);
    }
}
