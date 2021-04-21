<?php

namespace Database\Factories\User;

use App\Models\User\UserCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = UserCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $categories = ['Paciente', 'Empleado'];
        static $row = -1;
        $row++;
        return [
            'name' => $categories[$row]
        ];
    }
}
