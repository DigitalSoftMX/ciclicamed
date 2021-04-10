<?php

namespace Database\Factories\Medical\Clinical;

use App\Models\Medical\Clinical\ClinicalStudy;
use Illuminate\Database\Eloquent\Factories\Factory;

class ClinicalStudyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ClinicalStudy::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'created_in' => $this->faker->numberBetween(1, 5),
            'scheduled_in' => $this->faker->unique()->numberBetween(1, 50),
            'finished_at' => $this->faker->dateTime(),
            'clinicalstudystatus_id' => $this->faker->numberBetween(1, 5),
        ];
    }
}
