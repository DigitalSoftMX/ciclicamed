<?php

namespace Database\Factories\Product;

use App\Models\Product\ProductStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductStatus::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->text('50'),
            'color' => $this->faker->hexColor
        ];
    }
}
