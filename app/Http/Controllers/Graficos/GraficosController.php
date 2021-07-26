<?php

namespace App\Http\Controllers\Graficos;

use App\Http\Controllers\Controller;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Patient\Preregistration;
use App\Models\Payment\Payment;
use App\Models\Product\ProductPayment;
use Carbon\Carbon;
use Carbon\CarbonInterval;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GraficosController extends Controller
{
    public function getTiempoConsulta($id)
    {
        $consulta = MedicalConsult::findOrFail($id);
        $horasA = 0;
        $minutosA = 0;
        $segundosA = 0;
        $horasE = 0;
        $minutosE = 0;
        $segundosE = 0;
        $horasC = 0;
        $minutosC = 0;
        $segundosC = 0;
        //Asistente
        $startA = Carbon::parse($consulta['assistant_start_at']);
        $finishA = Carbon::parse($consulta['assistant_finish_at']);
        $horasA += $startA->diff($finishA)->h;
        $minutosA += $startA->diff($finishA)->i;
        $segundosA += $startA->diff($finishA)->s;
        //Enfermera
        $startE = Carbon::parse($consulta['nurse_start_at']);
        $finishE = Carbon::parse($consulta['nurse_finish_at']);
        $horasE += $startE->diff($finishE)->h;
        $minutosE += $startE->diff($finishE)->i;
        $segundosE += $startE->diff($finishE)->s;
        //Consulta
        $startC = Carbon::parse($consulta['consult_start_at']);
        $finishC = Carbon::parse($consulta['consult_finish_at']);
        $horasC += $startC->diff($finishC)->h;
        $minutosC += $startC->diff($finishC)->i;
        $segundosC += $startC->diff($finishC)->s;

        $tiempoA = CarbonInterval::hours($horasA)->minutes($minutosA)->seconds($segundosA)->cascade();
        $tiempoE = CarbonInterval::hours($horasE)->minutes($minutosE)->seconds($segundosE)->cascade();
        $tiempoC = CarbonInterval::hours($horasC)->minutes($minutosC)->seconds($segundosC)->cascade();
        $total = CarbonInterval::hours($horasA + $horasE + $horasC)->minutes($minutosA + $minutosE + $minutosC)->seconds($segundosA + $segundosE + $segundosC)->cascade();
        return response()->json([
            'asistente' => $tiempoA->h.':'.$tiempoA->i.':'.$tiempoA->s,
            'enfermera' => $tiempoE->h.':'.$tiempoE->i.':'.$tiempoE->s,
            'consulta' => $tiempoC->h.':'.$tiempoC->i.':'.$tiempoC->s,
            'total' => $total->h.':'.$total->i.':'.$total->s,
        ]);
    }

    public function getTiempo(Request $request)
    {
        $start = Carbon::parse($request['date'][0])->toDateString();
        $finish = Carbon::parse($request['date'][1])->toDateString();
        $consultas = MedicalConsult::whereBetween('created_at', [$start, $finish])->get();
        $horasA = 0;
        $minutosA = 0;
        $segundosA = 0;
        $horasE = 0;
        $minutosE = 0;
        $segundosE = 0;
        $horasC = 0;
        $minutosC = 0;
        $segundosC = 0;
        foreach($consultas as $consulta)
        {
            //Asistente
            $startA = Carbon::parse($consulta['assistant_start_at']);
            $finishA = Carbon::parse($consulta['assistant_finish_at']);
            $horasA += $startA->diff($finishA)->h;
            $minutosA += $startA->diff($finishA)->i;
            $segundosA += $startA->diff($finishA)->s;
            //Enfermera
            $startE = Carbon::parse($consulta['nurse_start_at']);
            $finishE = Carbon::parse($consulta['nurse_finish_at']);
            $horasE += $startE->diff($finishE)->h;
            $minutosE += $startE->diff($finishE)->i;
            $segundosE += $startE->diff($finishE)->s;
            //Consulta
            $startC = Carbon::parse($consulta['consult_start_at']);
            $finishC = Carbon::parse($consulta['consult_finish_at']);
            $horasC += $startC->diff($finishC)->h;
            $minutosC += $startC->diff($finishC)->i;
            $segundosC += $startC->diff($finishC)->s;
        }
        $tiempoA = CarbonInterval::hours($horasA)->minutes($minutosA)->seconds($segundosA)->cascade();
        $tiempoE = CarbonInterval::hours($horasE)->minutes($minutosE)->seconds($segundosE)->cascade();
        $tiempoC = CarbonInterval::hours($horasC)->minutes($minutosC)->seconds($segundosC)->cascade();
        $total = CarbonInterval::hours($horasA + $horasE + $horasC)->minutes($minutosA + $minutosE + $minutosC)->seconds($segundosA + $segundosE + $segundosC)->cascade();
        return response()->json([
            'asistente' => $tiempoA->h.':'.$tiempoA->i.':'.$tiempoA->s,
            'enfermera' => $tiempoE->h.':'.$tiempoE->i.':'.$tiempoE->s,
            'consulta' => $tiempoC->h.':'.$tiempoC->i.':'.$tiempoC->s,
            'total' => $total->h.':'.$total->i.':'.$total->s,
        ]);
    }

    public function getCobroServicio(Request $request, $id)
    {
        $start = Carbon::parse($request['date'][0])->toDateString();
        $finish = Carbon::parse($request['date'][1])->toDateString();
        $cobro = Payment::whereBetween('created_at', [$start, $finish])->whereHas('products', function($item) use($id) {
            $item->where('productcategory_id', $id);
        })
        ->select(['id'])->orderByRelation(['products:price' => function($item) use($id) {
            $item->where('productcategory_id', $id);
        }])->get();
        $total = 0;
        foreach($cobro as $pago)
        {
            $total += $pago['products_price_max'];
        }
        return response()->json($total);
    }

    public function getCobroProducto(Request $request, $id)
    {
        $start = Carbon::parse($request['date'][0])->toDateString();
        $finish = Carbon::parse($request['date'][1])->toDateString();
        $cobro = Payment::whereBetween('created_at', [$start, $finish])->whereHas('products', function($item) use($id) {
            $item->where('product_id', $id);
        })
        ->select(['id'])->orderByRelation(['products:price' => function($item) use($id) {
            $item->where('product_id', $id);
        }])->get();
        $total = 0;
        foreach($cobro as $pago)
        {
            $total += $pago['products_price_max'];
        }
        return response()->json($total);
    }

    public function getEstudiosImagenologia(Request $request)
    {
        $start = Carbon::parse($request['date'][0])->toDateString();
        $finish = Carbon::parse($request['date'][1])->toDateString();
        $especialidad = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultcategory_id', 3)->get()->count();
        $doctores = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultcategory_id', 3)->select('created_by', DB::raw('count(*) as total'))->groupBy('created_by')->orderBy('total', 'desc')->get()->load('createdBy:id,first_name,last_name')->take(5);
        return response()->json([
            'total' => $especialidad,
            'doctores' => $doctores
        ]);
    }

    public function getEstudiosLaboratorio(Request $request)
    {
        $start = Carbon::parse($request['date'][0])->toDateString();
        $finish = Carbon::parse($request['date'][1])->toDateString();
        $especialidad = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultcategory_id', 4)->get()->count();
        $doctores = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultcategory_id', 4)->select('created_by', DB::raw('count(*) as total'))->groupBy('created_by')->orderBy('total', 'desc')->get()->load('createdBy:id,first_name,last_name')->take(5);
        return response()->json([
            'total' => $especialidad,
            'doctores' => $doctores
        ]);
    }

    public function getConsultaServicio(Request $request, $id)
    {
        $start = Carbon::parse($request['date'][0])->toDateString();
        $finish = Carbon::parse($request['date'][1])->toDateString();
        switch(intval($id))
        {
            case 1:
                //Consultas
                $especialidad = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultcategory_id', 1)->orWhere('medicalconsultcategory_id', 2)->get()->count();
                return response()->json($especialidad);
            case 2:
                //Imagenologia
                $especialidad = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultcategory_id', 3)->get()->count();
                return response()->json($especialidad);
            case 3:
                //Laboratorio
                $especialidad = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultcategory_id', 4)->get()->count();
                return response()->json($especialidad);
        }
        return response()->json(0);
    }

    public function getConsultaMedico(Request $request, $id)
    {
        $start = Carbon::parse($request['date'][0])->toDateString();
        $finish = Carbon::parse($request['date'][1])->toDateString();
        $especialidad = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('doctor_id', $id)->get()->count();
        return response()->json($especialidad);
    }

    public function getConsultaEspecialidad(Request $request, $id)
    {
        $start = Carbon::parse($request['date'][0])->toDateString();
        $finish = Carbon::parse($request['date'][1])->toDateString();
        $especialidad = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalspecialty_id', $id)->get()->count();
        return response()->json($especialidad);
    }

    public function getCita(Request $request)
    {
        $start = Carbon::parse($request['date'][0])->toDateString();
        $finish = Carbon::parse($request['date'][1])->toDateString();
        $canceladas = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultstatus_id', 6)->get()->count();
        $confirmadas = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultstatus_id', 2)->get()->count();
        $primeraVez = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultcategory_id', 1)->get()->count();
        $seguimiento = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultcategory_id', 1)->get()->count();
        $noAsistieron = MedicalConsult::whereBetween('consult_schedule_start', [$start, $finish])->where('medicalconsultstatus_id', 3)->get()->count();
        return response()->json([
            'cancelados' => $canceladas,
            'confirmadas' => $confirmadas,
            'primeraVez' => $primeraVez,
            'seguimiento' => $seguimiento,
            'noAsistieron' => $noAsistieron
        ]);
    }
}
