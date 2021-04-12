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
        return [
            'medicaltest_id' => $this->faker->numberBetween(1, 25),
            'product_id' => $this->faker->numberBetween(1, 100),
            'updated_by' => $this->faker->numberBetween(1, 5),
        ];
    }
}
