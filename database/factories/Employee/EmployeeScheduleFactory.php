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
        $dateStart = $this->faker->numberBetween(0, 3);
        $dateFinish = $this->faker->numberBetween(4, 7);
        return [
            'employee_id' => $this->faker->numberBetween(1, 50),
            'start_day' => $dateStart,
            'start_time' => $this->faker->time('h:m:s'),
            'finish_day' => $dateFinish,
            'finish_time' => $this->faker->time('h:m:s'),
            'branch_id' => $this->faker->numberBetween(1, 15),
        ];
    }
}
