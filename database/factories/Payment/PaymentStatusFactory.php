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
        return [
            'name' => $this->faker->text('50'),
            'color' => substr($this->faker->hexColor, 1)
        ];
    }
}
