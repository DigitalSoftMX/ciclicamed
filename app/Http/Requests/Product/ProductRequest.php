<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
            'data.product_code' => ['required', 'max:25'],
            'data.lans_code' => ['nullable', 'max:25'],
            'data.name' => ['required', 'max:255'],
            'data.unit' => ['nullable', 'max:25'],
            'data.quantity_available' => ['nullable', 'numeric', 'between:0,9999999.99'],
            'data.price' => ['required', 'numeric', 'between:0.50,9999999.99'],
            'data.discount' => ['nullable', 'numeric', 'between:0,9999999.99'],
            // 'data.productcategory_id' => ['required', 'numeric', 'between:0,9999999.99'],
            // 'data.productstatus_id' => ['required', 'numeric', 'between:0,9999999.99'],
        ];
    }

    public function messages()
    {
        return [
            'data.product_code.required' => 'Ingrese un código de producto',
            'data.product_code.max' => 'El código del producto no debe de sobrepasar los 25 caracteres',
            'data.lans_code.max' => 'El código del proovedor no debe de sobrepasar los 25 caracteres',
            'data.name.required' => 'Ingrese una descripción del producto',
            'data.name.max' => 'La descripción del producto no debe de sobrepasar los 255 caracteres',
            'data.unit.max' => 'La unidad del producto no debe de sobrepasar los 255 caracteres',
            'data.quantity_available.between' => 'La cantidad del producto debe estar entre $0.50 y $9,999,999.99',
            'data.price.price' => 'Ingrese un precio al producto',
            'data.price.between' => 'El precio del producto debe estar entre $0.50 y $9,999,999.99',
            'data.discount.between' => 'El descuento del producto debe estar entre $0 y $9,999,999.99'
        ];
    }
}
