<?php

namespace Database\Factories\Checkup;

use App\Models\Checkup\CheckupCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class CheckupCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CheckupCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $categories = ['Mature', 'Mujer cíclica', 'Teen', 'Mom', 'Diagnóstico prenatal', 'Convenio institucional'];
        static $row = -1;
        $row++;
        return [
            'name' => $categories[$row],
        ];
    }
}
