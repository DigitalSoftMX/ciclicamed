<?php

namespace Database\Factories\Employee;

use App\Models\Employee\EmployeeDayOff;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeDayOffFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EmployeeDayOff::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'employee_id' => $this->faker->numberBetween(1, 5),
            'day_off' => $this->faker->date(),
            'start_time' => $this->faker->time('h:m:s'),
            'finish_time' => $this->faker->time('h:m:s'),
            'branch_id' => $this->faker->numberBetween(1, 15),
        ];
    }
}
