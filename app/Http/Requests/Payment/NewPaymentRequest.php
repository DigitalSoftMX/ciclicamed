<?php

namespace App\Http\Requests\Payment;

use Illuminate\Foundation\Http\FormRequest;

class NewPaymentRequest extends FormRequest
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
            'data.patientID' => ['required', 'min:1'],
            'data.branchID' => ['required', 'min:1'],
        ];
    }

    public function messages()
    {
        return [

            'data.patientID.required' => 'Seleccione un paciente',
            'data.patientID.min' => 'Seleccione un paciente',
            'data.branchID.required' => 'Seleccione una sucursal',
            'data.branchID.min' => 'Seleccione una sucursal',
        ];
    }
}
