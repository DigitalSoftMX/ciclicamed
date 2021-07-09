<?php

namespace Database\Factories\Medical\Test;

use App\Models\Medical\Test\MedicalTestOrder;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalTestOrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalTestOrder::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $row = 0;
        static $product = 107;
        $row++;
        $product++;
        return [
            'medicaltest_id' => $row,
            'product_id' => $product,
            'updated_by' => $this->faker->numberBetween(1, 5),
        ];
    }
}
