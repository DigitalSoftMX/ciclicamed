<?php

namespace Database\Factories\Medical\Test;

use App\Models\Medical\Test\MedicalTestStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalTestStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalTestStatus::class;

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
