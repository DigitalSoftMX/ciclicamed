<?php

namespace Database\Factories\Payment;

use App\Models\Payment\PaymentDebt;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaymentDebtFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PaymentDebt::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'payment_id' => $this->faker->numberBetween(1, 50),
            'description' => $this->faker->text(255),
            'total' => $this->faker->randomFloat(2, 1, 100000 ),
            'paymentmethod_id' => $this->faker->numberBetween(1, 3),
            'charged_by' => $this->faker->numberBetween(1, 5),
            'credit_card' => $this->faker->regexify('[0-9]{4}'),
        ];
    }
}
