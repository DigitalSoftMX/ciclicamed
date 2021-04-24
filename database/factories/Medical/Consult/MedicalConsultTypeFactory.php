<?php

namespace Database\Factories\Medical\Consult;

use App\Models\Medical\Consult\MedicalConsultType;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalConsultTypeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalConsultType::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        $types = ['Primera cita', 'Cita médica', 'Toma de muestras', 'Estudio de laboratorio', 'Checkup'];
        static $row = -1;
        $row++;
        return [
            'name' => $types[$row],
        ];
    }
}
