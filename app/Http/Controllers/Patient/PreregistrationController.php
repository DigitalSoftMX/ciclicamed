<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Models\Patient\Preregistration;
use Illuminate\Http\Request;

class PreregistrationController extends Controller
{
    public function updatePreregistration(Request $request, $id)
    {
        $preregistration = Preregistration::where('user_id', $id)->first();
        $preregistration->update($request->input('data'));
        return response()->json($preregistration);
    }
}
