<?php

namespace Database\Factories\Medical\Prescription;

use App\Models\Medical\Prescription\MedicalPrescription;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalPrescriptionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalPrescription::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'medicalconsult_id' => $this->faker->numberBetween(1, 50),
            'medicament_id' => $this->faker->numberBetween(1, 50),
            'dose' => $this->faker->text(100),
            'rate' => $this->faker->text(100),
            'duration' => $this->faker->text(100),
            'updated_by' => $this->faker->numberBetween(1, 5),
            'update_note' => $this->faker->text(200),
        ];
    }
}
