<?php

namespace App\Http\Requests\Medical\Test;

use Illuminate\Foundation\Http\FormRequest;

class MedicalTestResultRequest extends FormRequest
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
            'type' => ['required', 'max:10'],
            'file.*' => ['required', 'mimetypes:image/jpg,image/jpeg,image/png,image/bmp,application/pdf', 'max:10240'],
            'notes' => ['nullable', 'max:500'],
        ];
    }

    public function messages()
    {
        return [
            'type.required' => 'Debe de existir un tipo de formulario',
            'type.email' => 'El tipo de formulario no debe de exceder de los 10 caracteres',
            'files.*.mimetypes' => 'Los archivos subidos deben tener un formato válido',
            'files.*.max' => 'Cada uno de los archivos no debe de exceder los 10MB',
            'notes.max' => 'La nota no debe de exceder los 500 caracteres',
        ];
    }
}


// type: 'form',
// form: {
//     cuestionario: this.cuestionarioMastografia,
//     resultados: this.interpretacionUltrasonidos,
// },
// files: this.files