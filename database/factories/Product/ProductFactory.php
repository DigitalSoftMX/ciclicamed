<?php

namespace Database\Factories\Product;

use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'product_code' => ''.$this->faker->regexify('[A-Za-z0-9]{4}').'-'.$this->faker->regexify('[0-9]{4}'),
            'lans_code' => ''.$this->faker->regexify('[A-Za-z0-9]{4}').'-'.$this->faker->regexify('[0-9]{4}'),
            'name' => $this->faker->text(200),
            'unit' => $this->faker->text(25),
            'quantity_available' => $this->faker->numberBetween(1, 200),
            'price' => $this->faker->randomFloat(2, 1, 100000 ),
            'discount' => $this->faker->randomFloat(2, 0, 100 ),
            'productcategory_id' => $this->faker->numberBetween(1, 7),
            'productstatus_id' => $this->faker->numberBetween(1, 2),
        ];
    }
}
