<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class MedicamentRequest extends FormRequest
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
            'medicament.code' => ['required', 'string', 'min:2', 'max:50'],
            'medicament.name' => ['required', 'string', 'min:2', 'max:50'],
            'medicament.generic_name' => ['required', 'string', 'min:2', 'max:50'],
            'medicament.presentation' => ['required', 'string', 'min:2', 'max:70'],
        ];
    }

    public function messages()
    {
        return [
            'medicament.code.required' => 'Ingrese un código de medicamento',
            'medicament.code.string' => 'Ingrese un código de medicamento',
            'medicament.code.min' => 'El código del medicamento debe ser mínimo de 2 caracteres',
            'medicament.code.max' => 'El código del medicamento debe ser máximo de 50 caracteres',

            'medicament.name.required' => 'Ingrese un nombre de medicamento',
            'medicament.name.string' => 'Ingrese un nombre de medicamento',
            'medicament.name.min' => 'El nombre del medicamento debe ser mínimo de 2 caracteres',
            'medicament.name.max' => 'El nombre del medicamento debe ser máximo de 50 caracteres',

            'medicament.generic_name.required' => 'Ingrese un nombre genérico de medicamento',
            'medicament.generic_name.string' => 'Ingrese un nombre genérico de medicamento',
            'medicament.generic_name.min' => 'El nombre genérico del medicamento debe ser mínimo de 2 caracteres',
            'medicament.generic_name.max' => 'El nombre genérico del medicamento debe ser máximo de 50 caracteres',

            'medicament.presentation.required' => 'Ingrese una presentación de medicamento',
            'medicament.presentation.string' => 'Ingrese una presentación de medicamento',
            'medicament.presentation.min' => 'La presentación del medicamento debe ser mínimo de 2 caracteres',
            'medicament.presentation.max' => 'La presentación del medicamento debe ser máximo de 70 caracteres',
        ];
    }
}
