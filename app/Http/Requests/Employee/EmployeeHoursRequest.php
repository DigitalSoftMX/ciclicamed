<?php

namespace App\Http\Requests\Employee;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeHoursRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'hours' => ['required', 'array'],
            'hours.*.start_day' => ['required', 'numeric', 'min:0', 'max:6'],
            'hours.*.finish_day' => ['required', 'numeric', 'min:0', 'max:6'],
            'hours.*.start_time' => ['required', 'string', 'date_multi_format:"H:i","H:i:s"'],
            'hours.*.finish_time' => ['required', 'string', 'date_multi_format:"H:i","H:i:s"'],
            'hours.*.branch_id' => ['required', 'numeric', 'min:1'],
        ];
    }

    public function messages()
    {
        return [
            'hours.required' => 'Debe de agregar por lo menos un horario',
            'hours.array' => 'Debe de agregar por lo menos un horario',

            'hours.*.start_day.required' => 'Debe de agregar un título profesional',
            'hours.*.start_day.numeric' => 'Debe de seleccionar un día de la semana',
            'hours.*.start_day.min' => 'El día inicial de la semana debe de ser de Lunes a Domingo',
            'hours.*.start_day.max' => 'El día inicial de la semana debe de ser de Lunes a Domingo',

            'hours.*.finish_day.required' => 'Debe de agregar un título profesional',
            'hours.*.finish_day.numeric' => 'Debe de seleccionar un día de la semana',
            'hours.*.finish_day.min' => 'El día final de la semana debe de ser de Lunes a Domingo',
            'hours.*.finish_day.max' => 'El día final de la semana debe de ser de Lunes a Domingo',

            'hours.*.finish_time.required' => 'Debe de agregar una hora de cierre',
            'hours.*.finish_time.string' => 'El formato de hora debe ser válido',
            'hours.*.finish_time.date_multi_format' => 'Debe de seleccionar una hora de inicio',

            'hours.*.start_time.required' => 'Debe de agregar una hora de cierre',
            'hours.*.start_time.string' => 'El formato de hora debe ser válido',
            'hours.*.start_time.date_multi_format' => 'Debe de seleccionar una hora de cierre',

            'hours.*.branch_id.required' => 'Debe de seleccionar una sucursal',
            'hours.*.branch_id.numeric' => 'Debe de seleccionar una sucursal',
            'hours.*.branch_id.min' => 'Debe de seleccionar una sucursal',
            
        ];
    }
}
