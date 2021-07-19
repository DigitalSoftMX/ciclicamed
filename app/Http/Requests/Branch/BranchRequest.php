<?php

namespace App\Http\Requests\Branch;

use Illuminate\Foundation\Http\FormRequest;

class BranchRequest extends FormRequest
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
            'branch.name' => ['required', 'string', 'min:3', 'max:100'],
            'branch.address' => ['required', 'string', 'max:255'],
            'branch.phone' => ['required', 'string', 'max:10'],
        ];
    }

    public function messages()
    {
        return [
            'branch.name.required' => 'Debe de ingresar una sucursal',
            'branch.name.string' => 'Debe de ingresar una sucursal',
            'branch.name.min' => 'EL nombre de la sucursal debe de tener al menos 3 caracteres',
            'branch.name.max' => 'El nombre de la sucursal no debe de exceder de 100 caracteres',

            'branch.address.required' => 'Debe de ingresar una dirección',
            'branch.address.string' => 'Debe de ingresar una dirección',
            'branch.address.max' => 'La dirección de la sucursal no debe de exceder de 255 caracteres',

            'branch.phone.required' => 'Debe de ingresar un teléfono',
            'branch.phone.string' => 'Debe de ingresar un teléfono',
            'branch.phone.max' => 'El teléfono de la sucursal no debe de exceder de 10 caracteres',
        ];
    }
}
