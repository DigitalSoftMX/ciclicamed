<?php

namespace Database\Factories\Payment;

use App\Models\Payment\PaymentMethod;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaymentMethodFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PaymentMethod::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $data = ['En efectivo', 'Tarjeta de crédito', 'Tarjeta de débito'];
        static $row = 0;
        return [
            'name' => $data[$row++],
        ];
    }
}
