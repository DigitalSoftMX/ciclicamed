<?php

namespace Database\Factories\Medical\Test;

use App\Models\Medical\Test\MedicalTestStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalTestStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalTestStatus::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $statuses = ['Estudio creado', 'Muestras recogidas', 'Analizando muestras', 'Resultados creados', 'Estudio cancelado'];
        $hexColors = ['#5E35B1', '#1E88E5', '#546E7A', '#43A047', '#212121'];
        static $row = -1;
        $row++;
        return [
            'name' => $statuses[$row],
            'color' => $hexColors[$row]
        ];
    }
}
