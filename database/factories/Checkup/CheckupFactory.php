<?php

namespace Database\Factories\Checkup;

use App\Models\Checkup\Checkup;
use Illuminate\Database\Eloquent\Factories\Factory;

class CheckupFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Checkup::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'checkupcategory_id' => $this->faker->numberBetween(1, 6),
            'patient_id' => $this->faker->numberBetween(1, 25),
            'checkupstatus_id' => $this->faker->numberBetween(1, 4),
        ];
    }
}
