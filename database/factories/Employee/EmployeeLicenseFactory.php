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
        static $row = 1;

        if($row === 1)
        {
            $row++;
            EmployeeLicense::create([
                'employee_id' => 1,
                'degree_title' => '',
                'license_number' => '',
                'school_name' => '',
                'medicalspecialty_id' => 11,
            ]);
        }

        if($row === 2)
        {
            $row++;
            EmployeeLicense::create([
                'employee_id' => 2,
                'degree_title' => '',
                'license_number' => '',
                'school_name' => '',
                'medicalspecialty_id' => 12,
            ]);
        }

        return [
            'employee_id' => $this->faker->numberBetween(3, 25),
            'degree_title' => $this->faker->text(100),
            'license_number' => $this->faker->regexify('[0-9]{8}'),
            'school_name' => $this->faker->text(100),
            'medicalspecialty_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
