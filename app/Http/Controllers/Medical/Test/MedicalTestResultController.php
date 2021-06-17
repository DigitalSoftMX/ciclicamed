<?php

namespace App\Http\Controllers\Medical\Test;

use App\Http\Controllers\Controller;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Test\MedicalTest;
use App\Models\Medical\Test\MedicalTestStatus;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;

class MedicalTestResultController extends Controller
{
    public function testResult(Request $request, $id)
    {
        $filePath = [];
        $files = $request->file('file');
        foreach ($files as $file) {
            $successfulFile = basename($file->store('test/results'));
            array_push($filePath, $successfulFile);
        }
        $result = json_encode([
            'type' => 'files',
            'files' => $filePath,
        ]);
        
        return response()->json($result);
    }

    public function getResultFile($id)
    {
        $storage = storage_path('app/test/results/'.$id.'');
        return file_exists($storage) ? response()->download($storage) : response()->view('errors.404',[], 404);
    }

    public function getCreatedTest()
    {
        $test = MedicalTest::whereHas('status', function($query) {
            $query->where('name', 'Estudio creado');
        })->get();

        return response()->json($test);
    }

    public function getSampleTests()
    {
        $test = MedicalTest::whereHas('status', function($query) {
            $query->where('name', 'Muestras recogidas');
        })->get();

        return response()->json($test);
    }

    public function getCompletedTest()
    {
        $test = MedicalTest::whereHas('status', function($query) {
            $query->where('name', 'Resultados creados');
        })->get();

        return response()->json($test);
    }
}
