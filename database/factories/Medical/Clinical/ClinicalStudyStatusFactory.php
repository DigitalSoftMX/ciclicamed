<?php

namespace Database\Factories\Medical\Clinical;

use App\Models\Medical\Clinical\ClinicalStudyStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class ClinicalStudyStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ClinicalStudyStatus::class;

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
