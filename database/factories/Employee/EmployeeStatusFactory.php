<?php

namespace Database\Factories\Employee;

use App\Models\Employee\EmployeeStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EmployeeStatus::class;

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
