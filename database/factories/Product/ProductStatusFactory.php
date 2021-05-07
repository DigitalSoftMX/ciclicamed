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
        static $row = 0;
        $status = ['Activo', 'Inactivo'];
        return [
            'name' => $status[$row++],
            'color' => $this->faker->hexColor
        ];
    }
}
