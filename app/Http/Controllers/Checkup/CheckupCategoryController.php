<?php

namespace App\Http\Controllers\Checkup;

use App\Http\Controllers\Controller;
use App\Models\Checkup\Checkup;
use App\Models\Checkup\CheckupCategory;
use App\Models\Checkup\CheckupStatus;
use App\Models\Medical\Consult\MedicalConsult;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CheckupCategoryController extends Controller
{
    public function getAllCategories()
    {
        $categories = CheckupCategory::all();
        return response()->json($categories);
    }

    public function getPendings(Request $request)
    {
        $checkups = [];
        if($request->has('query'))
        {
            $query = $request->input('query');
            $checkups = Checkup::whereHas('patient', function($item) use($query) {
                $item->where('first_name', 'like', '%'.$query.'%')
                      ->orWhere('last_name', 'like', '%'.$query.'%');
            })->orWhere('id', 'like', '%'.$query.'%');
        } else {
            $checkups = Checkup::whereHas('status', function($query) {
                $query->where('name', 'En estudios')
                      ->orWhere('name', 'En consultas');
            })->paginate();
        }
        
        $response = [
            'pagination' => [
                'total' => $checkups->total(),
                'per_page' => $checkups->perPage(),
                'current_page' => $checkups->currentPage(),
                'last_page' => $checkups->lastPage(),
                'from' => $checkups->firstItem(),
                'to' => $checkups->lastItem()
            ],
            'data' => $checkups->load('category', 'patient')
        ];
        return response()->json($response);
    }

    public function createCheckups(Request $request)
    {
        $checkupStatus = CheckupStatus::where('name', 'En estudios')->first()->id;
        $checkup = Checkup::create([
            'patient_id' => $request['data.patient_id'],
            'checkupcategory_id' => $request['data.checkupcategory_id'],
            'checkupstatus_id' => $checkupStatus,
        ])->id;
        $checkups = [];
        foreach($request['data.checkupList'] as $item)
        {
            $consult = MedicalConsult::create([
                'patient_id' => $request['data.patient_id'],
                'doctor_id' => null,
                'consult_reason' => 'Estudio de Checkup',
                'consult_schedule_start' => Carbon::createFromTimestamp($item['consult_schedule_start']),
                'consult_schedule_finish' => Carbon::createFromTimestamp($item['consult_schedule_start']),
                'medicalspecialty_id' => 1,
                'medicalconsultcategory_id' => 1,
                'branch_id' => $item['branch_id'],
                'medicalconsultstatus_id' => 1,
                'checkup_id' => $checkup
            ]);
            array_push($checkups, $consult);
        }
        return response()->json($checkups);
    }
}
