<?php

namespace Database\Factories\Medical\Prescription;

use App\Models\Medical\Prescription\Medicament;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicamentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Medicament::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'code' => $this->faker->isbn10,
            'name' => $this->faker->text(50),
            'presentation' => $this->faker->text(70)
        ];
    }
}
