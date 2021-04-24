<?php

namespace Database\Factories\Medical;

use App\Models\Medical\MedicalSpecialty;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalSpecialtyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalSpecialty::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $types = 
        [
            'Uroginecología',
            'Climaterío y salud ósea',
            'Materno fetal',
            'Nutrición perinatal',
            'Nutrición general',
            'Genética perinatal',
            'Biología de la reproduccion',
            'Cirugía endoscópica',
            'Oncología',
            'Colposcopía',
        ];
        static $row = -1;
        $row++;
        return [
            'name' => $types[$row],
        ];
    }
}
