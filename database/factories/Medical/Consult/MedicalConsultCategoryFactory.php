<?php

namespace Database\Factories\Medical\Consult;

use App\Models\Medical\Consult\MedicalConsultCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalConsultCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalConsultCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        $types = ['Primera cita', 'Cita médica', 'Estudio de imagenología', 'Estudio de laboratorio'];
        static $row = -1;
        $row++;
        return [
            'name' => $types[$row],
        ];
    }
}
