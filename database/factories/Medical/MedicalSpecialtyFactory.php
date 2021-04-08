<?php

namespace Database\Factories\Medical;

use App\Models\Medical\MedicalSpecialty;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalSpecialtyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalSpecialty::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->text(100)
        ];
    }
}
