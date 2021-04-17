<?php

namespace Database\Factories\Employee;

use App\Models\Employee\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'first_name' => $this->faker->unique()->firstName(),
            'last_name' => $this->faker->unique()->lastName(),
            'gender' => $this->faker->numberBetween(0, 1),
            'birthday' => $this->faker->dateTimeThisCentury->format('Y-m-d'),
            'address' => $this->faker->address,
            'phone' => $this->faker->regexify('[0-9]{10}'),
            'cellphone' => $this->faker->regexify('[0-9]{10}'),
            'email' => $this->faker->unique()->safeEmail(),
            'photo' => $this->faker->regexify('[A-Za-z0-9]{25}'),
            'employeestatus_id' => $this->faker->numberBetween(1, 5),
            'user_id' => $this->faker->unique()->numberBetween(6, 10)
        ];
    }
}
