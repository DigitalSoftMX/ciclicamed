<?php

namespace Database\Factories\Product;

use App\Models\Product\ProductPayment;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductPaymentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductPayment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'medicalconsult_id' => $this->faker->numberBetween(1, 50),
            'payment_id' => $this->faker->numberBetween(1, 50),
            'product_id' => $this->faker->numberBetween(1, 969),
        ];
    }
}
