<?php

namespace App\Http\Controllers\Medical\Test;

use App\Http\Controllers\Controller;
use App\Http\Requests\Medical\Test\MedicalTestResultRequest;
use App\Models\Checkup\Checkup;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Test\MedicalTest;
use App\Models\Medical\Test\MedicalTestResult;
use App\Models\Medical\Test\MedicalTestStatus;
use App\Models\Product\ProductCategory;
use App\Models\User\User;
use Carbon\Carbon;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MedicalTestResultController extends Controller
{
    public function testResult(MedicalTestResultRequest $request, $id)
    {
        $request->validated();
        $employee = User::findOrFail(Auth::user()->id);
        $time = Carbon::now()->setTimezone('America/Mexico_City');
        if($employee->hasRole(['Laboratorio', 'Imagenologia', 'Administrador']))
        {
            if($request->file('files'))
            {
                $filePath = [];
                $files = $request->file('files');
                foreach ($files as $file) {
                    $successfulFile = basename($file->store('test/results'));
                    array_push($filePath, $successfulFile);
                }

                $result = json_encode([
                    'type' => 'files',
                    'form' => json_encode($request['form']),
                    'files' => $filePath,
                ]);

                MedicalTestResult::where('medicaltest_id', $id)->delete();
                MedicalTestResult::create([
                    'medicaltest_id' => $id,
                    'created_by' => $employee['id'],
                    'results' =>  $result,
                    'notes' => $request['notes']
                ]);

                $test = MedicalTest::findOrFail($id);
                $test->update([
                    'finished_at' => $time,
                    'medicalteststatus_id' => 4
                ]);

                //Verifica si el estudio pertenece a un checkup y si es verdadero verifica que todos los estudios esten realizados para cambiar el estado del checkup
                // a estudios terminados
                $checkupId = $test->consultScheduled->checkup_id;
                if($checkupId)
                {
                    $checkup = Checkup::findOrFail($checkupId)->test;
                    $missingTest = 0;
                    foreach($checkup as $test)
                    {
                        if(intval($test['medicalteststatus_id']) !== 1)
                        {
                            $missingTest++;
                        }
                    }
                    if($missingTest === 0)
                    {
                        Checkup::findOrFail(220)->update([
                        'checkupstatus_id' => 2
                        ]);
                    }
                }

                return response()->json(true, 200);
            }
            
            $result = json_encode([
                'type' => 'files',
                'form' => json_encode($request['form']),
                'notes' => $request['notes']
            ]);

            MedicalTestResult::where('medicaltest_id', $id)->delete();
            MedicalTestResult::create([
                'medicaltest_id' => $id,
                'created_by' => $employee['id'],
                'results' =>  $result,
                'notes' => $request['notes']
            ]);

            $test = MedicalTest::findOrFail($id);
            $test->update([
                'finished_at' => $time,
                'medicalteststatus_id' => 4
            ]);

            //Verifica si el estudio pertenece a un checkup y si es verdadero verifica que todos los estudios esten realizados para cambiar el estado del checkup
                // a estudios terminados
            $checkupId = $test->consultScheduled->checkup_id;
            if($checkupId)
            {
                $checkup = Checkup::findOrFail($checkupId)->test;
                $missingTest = 0;
                foreach($checkup as $test)
                {
                    if(intval($test['medicalteststatus_id']) !== 1)
                    {
                        $missingTest++;
                    }
                }
                if($missingTest === 0)
                {
                    Checkup::findOrFail(220)->update([
                    'checkupstatus_id' => 2
                    ]);
                }
            }

            return response()->json(true, 200);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getResultFile($id)
    {
        $storage = storage_path('app/test/results/'.$id.'');
        return file_exists($storage) ? response()->download($storage) : response()->view('errors.404',[], 404);
    }
}
