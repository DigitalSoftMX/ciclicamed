<?php

namespace Database\Factories\Checkup;

use App\Models\Checkup\CheckupStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class CheckupStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CheckupStatus::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $statuses = ['En estudios', 'En consultas', 'Completado', 'Cancelado'];
        static $row = 0;
        return [
            'name' => $statuses[$row++]
        ];
    }
}
