<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdatePasswordRequest extends FormRequest
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
            'password' => ['required', 'min:8', 'max:24'],
            'confirmPassword' => ['required',  'min:8', 'max:24', 'same:password'],
        ];
    }

    public function messages()
    {
        return [
            'password.required' => 'Debe de ingresar una contraseña',
            'password.min' => 'La contreseña debe de tener entre 8 y 24 caracteres',
            'password.max' => 'La contreseña debe de tener entre 8 y 24 caracteres',
            'confirmPassword.required' => 'Debe de ingresar una contraseña',
            'confirmPassword.min' => 'La contreseña debe de tener entre 8 y 24 caracteres',
            'confirmPassword.max' => 'La contreseña debe de tener entre 8 y 24 caracteres',
            'confirmPassword.same' => 'La contreseña de confirmación debe ser la misma que la primer contraseña',
        ];
    }
}
