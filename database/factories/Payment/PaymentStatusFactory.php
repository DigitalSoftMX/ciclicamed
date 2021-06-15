<?php

namespace Database\Factories\Payment;

use App\Models\Payment\PaymentStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaymentStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PaymentStatus::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $data = ['Creado', 'Deuda', 'Completado', 'Cancelado'];
        static $row = 0;
        return [
            'name' => $data[$row++],
            'color' => $this->faker->hexColor
        ];
    }
}
