<?php

namespace App\Http\Requests\Employee;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeDegreeRequest extends FormRequest
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
            'degrees' => ['required', 'array'],
            'degrees.*.degree_title' => ['required', 'string', 'max:100'],
            // 'degrees.*.employee_id' => ['required', 'numeric', 'min:1'],
            'degrees.*.license_number' => ['required', 'string', 'max:8'],
            'degrees.*.medicalspecialty_id' => ['required' ,'numeric', 'min:1'],
            'degrees.*.school_name' => ['required', 'string', 'max:100'],
        ];
    }

    public function messages()
    {
        return [
            'degrees.required' => 'Debe de agregar por lo menos una licencia',
            'degrees.array' => 'Debe de agregar por lo menos una licencia',

            'degrees.*.degree_title.required' => 'Debe de agregar un título profesional',
            'degrees.*.degree_title.string' => 'Debe de agregar un título profesional',
            'degrees.*.degree_title.max' => 'El nombre del título profesional no debe de contener más de 100 caracteres',

            'degrees.*.employee_id.required' => 'Debe de seleccionar un empleado',
            'degrees.*.employee_id.numeric' => 'Debe de seleccionar un empleado',
            'degrees.*.employee_id.min' => 'Debe de seleccionar un empleado',

            'degrees.*.license_number.required' => 'Debe de agregar una cédula profesiona',
            'degrees.*.license_number.string' => 'Debe de agregar una cédula profesiona',
            'degrees.*.license_number.max' => 'El número de cédula profesional no debe de contener más de 8 caracteres',

            'degrees.*.medicalspecialty_id.required' => 'Debe de seleccionar una especialidad médica',
            'degrees.*.medicalspecialty_id.numeric' => 'Debe de seleccionar una especialidad médica',
            'degrees.*.medicalspecialty_id.min' => 'Debe de seleccionar una especialidad médica',

            'degrees.*.school_name.required' => 'Debe de agregar una escuela',
            'degrees.*.school_name.string' => 'Debe de agregar una escuela',
            'degrees.*.school_name.max' => 'El nombre de la escuela no debe de contener más de 100 caracteres',
        ];
    }
}
