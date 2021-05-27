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
        static $row = -1;
        $data = ['Empleado', 'Cesado'];
        $color = ['#4CAF50', '#F44336'];
        $row++;
        return [
            'name' => $data[$row],
            'color' => $color[$row]
        ];
    }
}
