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
        static $employeeUser = 25;

        if($employeeUser === 26)
        {
            $employeeUser++;
            Employee::create([
                'first_name' => 'Laboratorio',
                'last_name' => '',
                'gender' => 0,
                'birthday' => $this->faker->dateTimeThisCentury->format('Y-m-d'),
                'address' => null,
                'phone' => null,
                'cellphone' => null,
                'email' => null,
                'photo' => null,
                'employeecategory_id' => 1,
                'employeestatus_id' => 1,
                'user_id' => null
            ]);
        }

        if($employeeUser === 27)
        {
            $employeeUser++;
            Employee::create([
                'first_name' => 'Imagenología',
                'last_name' => '',
                'gender' => 0,
                'birthday' => $this->faker->dateTimeThisCentury->format('Y-m-d'),
                'address' => null,
                'phone' => null,
                'cellphone' => null,
                'email' => null,
                'photo' => null,
                'employeecategory_id' => 1,
                'employeestatus_id' => 1,
                'user_id' => null
            ]);
        }

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
            'employeecategory_id' => $this->faker->numberBetween(1, 6),
            // 'employeestatus_id' => $this->faker->numberBetween(1, 2),
            'employeestatus_id' => 1,
            'user_id' => $employeeUser++
        ];
    }
}
