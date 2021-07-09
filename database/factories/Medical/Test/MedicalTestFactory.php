<?php

namespace Database\Factories\Medical\Test;

use App\Models\Medical\Test\MedicalTest;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalTestFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalTest::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $number = 0;
        $number++;
        $testCode ="MUE-" . str_pad((int) $number, 3, "0", STR_PAD_LEFT);
        return [
            'test_code' => $testCode,
            'created_in' => $this->faker->numberBetween(1, 5),
            'scheduled_in' => $this->faker->unique()->numberBetween(1, 50),
            'finished_at' => $this->faker->dateTimeThisYear(),
            'medicalteststatus_id' => $this->faker->numberBetween(1, 5),
        ];
    }
}
