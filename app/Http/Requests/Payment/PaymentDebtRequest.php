<?php

namespace App\Http\Requests\Payment;

use Illuminate\Foundation\Http\FormRequest;

class PaymentDebtRequest extends FormRequest
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
            'cantidad' => ['required', 'numeric', 'between:0.50,999999.99'],
            'formaPago' => ['required', 'numeric'],
            'tarjeta' => ['nullable', 'digits:4', 'numeric'],
            'descripcion' => ['required', 'max:255'],
        ];
    }

    public function messages()
    {
        return [

            'cantidad.required' => 'Ingrese una cantidad',
            'cantidad.numeric' => 'La cantidad debe ser numerica',
            'cantidad.between' => 'La cantidad del pago debe estar entre $0.50 y $999,999.99',
            'formaPago.required' => 'Ingrese una cantidad',
            'formaPago.numeric' => 'La forma de pago debe existir en el sistema',
            'tarjeta.digits' => 'Debe ingresar los últimos 4 dígitos de la tarjeta',
            'tarjeta.numeric' => 'Solo puede ingresar números',
            'descripcion.required' => 'Ingrese una descripción del pago',
            'descripcion.max' => 'La descripción del pago no debe de sobrepasar los 255 caracteres',
        ];
    }
}
