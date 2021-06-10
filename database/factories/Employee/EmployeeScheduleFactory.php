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
        $hourStart = '0'.$this->faker->numberBetween(8, 9).':'.$this->faker->numberBetween(0, 5).$this->faker->numberBetween(0, 9).':00';
        $hourFinish = $this->faker->numberBetween(12, 20).':'.$this->faker->numberBetween(0, 5).$this->faker->numberBetween(0, 9).':00';
        return [
            'employee_id' => $this->faker->numberBetween(1, 50),
            'start_day' => $dateStart,
            'start_time' => $hourStart,
            'finish_day' => $dateFinish,
            'finish_time' => $hourFinish,
            'branch_id' => $this->faker->numberBetween(1, 15),
        ];
    }
}
