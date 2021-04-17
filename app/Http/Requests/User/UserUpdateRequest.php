<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
            'email' => ['email'],
            'userstatus_id' => ['digits_between:1,5'],
            'usercategory_id' => ['digits_between:1,2'],
        ];
    }

    public function messages()
    {
        return [
            'email.email' => 'El correo electrónico debe ser válido'
        ];
    }
}
