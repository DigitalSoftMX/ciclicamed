<?php

namespace Database\Factories\Employee;

use App\Models\Employee\EmployeeCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EmployeeCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $categories = ['Doctor', 'Enfermera', 'Laboratorio', 'Imagenologo', 'Cajero', 'Asistente'];
        static $row = -1;
        $row++;
        return [
            'name' => $categories[$row],
        ];
    }
}
