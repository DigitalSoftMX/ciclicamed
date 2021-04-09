<?php

namespace Database\Factories\Medical\Consult;

use App\Models\Medical\Consult\MedicalConsultStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalConsultStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalConsultStatus::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->text(100),
            'color' => substr($this->faker->hexColor, 1)
        ];
    }
}
