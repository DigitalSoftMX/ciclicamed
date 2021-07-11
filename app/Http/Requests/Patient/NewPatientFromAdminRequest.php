<?php

namespace App\Http\Requests\Patient;

use Illuminate\Foundation\Http\FormRequest;

class NewPatientFromAdminRequest extends FormRequest
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
            'first_name' => ['required', 'max:100'],
            'last_name' => ['required', 'max:100'],
            'gender' => ['required', 'boolean'],
            'birthday' => ['required', 'date'],
            'address' => ['required', 'max:255'],
            'phone' => ['nullable', 'max:10'],
            'cellphone' => ['required', 'max:10'],
            'email' => ['required', 'email', 'max:100'],
            'photo' => ['required', 'image', 'max:10240'],
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Debe de ingresar un correo',
            'email.email' => 'El correo debe tener un formato válido (ejemplo: correo@ejemplo.com)',
            'first_name.required' => 'Debe de ingresar su nombre(s)',
            'first_name.max' => 'Su nombre no debe de contener más de 100 caracteres',
            'last_name.required' => 'Debe de ingresar su apellido(s)',
            'last_name.max' => 'Sus apellidos no debe de contener más de 100 caracteres',
            'gender.required' => 'Debe de ingresar su sexo',
            'gender.boolean' => 'Su sexo debe ser másculino o femenino',
            'birthday.required' => 'Debe de ingresar su fecha de nacimiento',
            'birthday.date' => 'La fecha de nacimiento debe tener un formato válido',
            'address.required' => 'Debe de ingresar su dirección',
            'address.max' => 'La dirección no debe de contener más de 255 caracteres',
            'phone.size' => 'El número de teléfono debe tener 10 dígitos (incluye código LADA)',
            'cellphone.required' => 'Debe de ingresar un número de celular',
            'cellphone.size' => 'El número de teléfono debe tener 10 dígitos (incluye código LADA)',
            'photo.required' => 'Debe de cargar una imagen',
            'photo.image' => 'El archivo que seleccionó debe ser un archivo de imagen compatible (.jpg, .jpeg, .png, .bmp, .svg)',
            'photo.max' => 'El peso del archivo debe ser máximo de 10MB',
        ];
    }
}
