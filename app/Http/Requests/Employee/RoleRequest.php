<?php

namespace App\Http\Requests\Employee;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
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
            'roles' => ['required', 'min:1'],
        ];
    }

    public function messages()
    {
        return [

            'roles.required' => 'Debe seleccionar al menos un rol',
            'roles.numeric' => 'Debe seleccionar al menos un rol',
        ];
    }
}
