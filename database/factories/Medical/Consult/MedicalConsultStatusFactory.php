<?php

namespace Database\Factories\Medical\Consult;

use App\Models\Medical\Consult\MedicalConsultStatus;
use App\Models\Medical\Consult\MedicalConsultType;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalConsultStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalConsultStatus::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $statuses = ['Agendado', 'Confirmado', 'Ausente', 'En consulta', 'Finalizado', 'Cancelado'];
        $hexColors = ['#5E35B1', '#43A047', '#F4511E', '#1E88E5', '#546E7A', '#212121'];
        static $row = -1;
        $row++;
        return [
            'name' => $statuses[$row],
            'color' => $hexColors[$row]
        ];
    }
}
