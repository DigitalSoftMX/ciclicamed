<?php

namespace Database\Factories\Payment;

use App\Models\Payment\Payment;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaymentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Payment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'created_by' => $this->faker->numberBetween(1, 5),
            'updated_by' => $this->faker->numberBetween(1, 5),
            'charged_by' => $this->faker->numberBetween(1, 5),
            'paymentmethod_id' => $this->faker->numberBetween(1, 3),
            'branch_id' => $this->faker->numberBetween(1, 5),
            'discount' => $this->faker->randomFloat(2, 0, 100 ),
            'total' => $this->faker->randomFloat(2, 1, 100000 ),
            'credit_card' => $this->faker->regexify('[0-9]{4}'),
            'paymentstatus_id' => $this->faker->numberBetween(1, 4),
            'patient_id' => $this->faker->numberBetween(1, 5),
        ];
    }
}
