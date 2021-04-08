<?php

namespace Database\Factories\Employee;

use App\Models\Employee\EmployeeLicense;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeLicenseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EmployeeLicense::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'employee_id' => $this->faker->numberBetween(1, 5),
            'degree_title' => $this->faker->text(100),
            'licence_number' => $this->faker->regexify('[0-9]{8}'),
            'medicalspecialty_id' => $this->faker->numberBetween(1, 5),
        ];
    }
}
