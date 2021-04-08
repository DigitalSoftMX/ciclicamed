<?php

namespace Database\Factories\Employee;

use App\Models\Employee\EmployeeSchedule;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeScheduleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EmployeeSchedule::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $date = $this->faker->numberBetween(1, 7);
        return [
            'employee_id' => $this->faker->numberBetween(1, 5),
            'start_day' => $date,
            'start_time' => $this->faker->time('h:m:s'),
            'finish_day' => $date,
            'finish_time' => $this->faker->time('h:m:s'),
            'branch_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
