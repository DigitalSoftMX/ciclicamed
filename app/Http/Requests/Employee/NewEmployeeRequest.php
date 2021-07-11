<?php

namespace App\Http\Requests\Employee;

use Illuminate\Foundation\Http\FormRequest;

class NewEmployeeRequest extends FormRequest
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
            'email' => ['required', 'email'],
            'first_name' => ['required', 'max:100'],
            'last_name' => ['required', 'max:100'],
            'gender' => ['required', 'boolean'],
            'birthday' => ['required', 'date'],
            'address' => ['required', 'max:255'],
            'phone' => ['nullable', 'size:10'],
            'cellphone' => ['required', 'size:10'],
            'photo' => ['required', 'image', 'max:10240'],
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Debe de ingresar un correo',
            'email.email' => 'El correo debe tener un formato válido (ejemplo: correo@ejemplo.com)',
            'confirmEmail.required' => 'Debe de confirmar el correo',
            'confirmEmail.email' => 'El correo debe tener un formato válido (ejemplo: correo@ejemplo.com)',
            'confirmEmail.same' => 'El correo de confirmación debe ser el mismo que el primer correo',
            'password.required' => 'Debe de ingresar una contraseña',
            'password.min' => 'La contreseña debe de tener entre 8 y 24 caracteres',
            'password.max' => 'La contreseña debe de tener entre 8 y 24 caracteres',
            'confirmPassword.required' => 'Debe de ingresar una contraseña',
            'confirmPassword.min' => 'La contreseña debe de tener entre 8 y 24 caracteres',
            'confirmPassword.max' => 'La contreseña debe de tener entre 8 y 24 caracteres',
            'confirmPassword.same' => 'La contreseña de confirmación debe ser la misma que la primer contraseña',
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
            'photo.required' => 'Debe subir una foto de perfil',
            'photo.image' => 'El archivo que seleccionó debe ser un archivo de imagen compatible (.jpg, .jpeg, .png, .bmp, .svg)',
            'photo.max' => 'El peso del archivo debe ser máximo de 10MB',
            'roles.required' => 'Debe seleccionar al menos un rol',
            'roles.numeric' => 'Debe seleccionar al menos un rol',
        ];
    }
}
