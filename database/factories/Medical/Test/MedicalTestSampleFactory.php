<?php

namespace Database\Factories\Medical\Test;

use App\Models\Medical\Test\MedicalTestSample;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalTestSampleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalTestSample::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'medicaltest_id' => $this->faker->numberBetween(1, 25),
            'fum' => $this->faker->date(),
            'collected_by' => $this->faker->numberBetween(1, 5),
            'finish_at' => $this->faker->dateTime(),
            'sent_by' => $this->faker->numberBetween(1, 5),
            'sent_at' => $this->faker->dateTime(),
            'updated_by' => $this->faker->numberBetween(1, 5),
            'update_note' => $this->faker->text(200),
            'medicalteststatus_id' => $this->faker->numberBetween(1, 5),
        ];
    }
}
