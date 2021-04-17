<?php

namespace App\Http\Requests\Patient;

use Illuminate\Foundation\Http\FormRequest;

class PatientUpdateRequest extends FormRequest
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
            'data.first_name' => ['required', 'max:100'],
            'data.last_name' => ['required', 'max:100'],
            'data.gender' => ['required', 'boolean'],
            'data.birthday' => ['required', 'date'],
            'data.address' => ['nullable', 'max:255'],
            'data.phone' => ['nullable', 'max:10'],
            'data.cellphone' => ['nullable', 'max:10'],
            'data.email' => ['required', 'email', 'max:100'],
        ];
    }

    public function messages()
    {
        return [
            'data.first_name.required' => 'Debe de ingresar su nombre(s)',
            'data.first_name.max' => 'El nombre(s) no debe de exceder los 100 caracteres',
            'data.last_name.required' => 'Debe de ingresar su apellidos',
            'data.last_name.max' => 'Los apellidos no deben de exceder los 100 caracteres',
            'data.gender.required' => 'Debe se seleccionar un sexo',
            'data.gender.boolean' => 'El sexo debe ser hombre o mujer',
            'data.birthday.required' => 'Ingrese una fecha de nacimiento',
            'data.birthday.date' => 'El formato de la fecha de nacimiento es incorrecto',
            'data.address.max' => 'La dirección completa no debe de exceder los 255 caracteres',
            'data.phone.max' => 'El número de teléfono no debe de exceder de los 10 dígitos',
            'data.cellphone.max' => 'El número celular no debe de exceder de los 10 dígitos',
            'data.email.required' => 'El correo electrónico no puede estar vacío',
            'data.email.email' => 'El correo electrónico debe de tener un formato válido (ej. correo@correo.com)',
            'data.email.max' => 'El correo electrónico no debe de exceder los 100 dígitos',
        ];
    }
}
