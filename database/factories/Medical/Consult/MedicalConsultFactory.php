<?php

namespace Database\Factories\Medical\Consult;

use App\Models\Medical\Consult\MedicalConsult;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalConsultFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalConsult::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'patient_id' => $this->faker->numberBetween(1, 5),
            'created_by' => $this->faker->numberBetween(1, 5),
            'medicalconsulttype_id' => $this->faker->numberBetween(1, 5),
            'medicalconsultstatus_id' => $this->faker->numberBetween(1, 5),
            'is_confirmed' => $this->faker->numberBetween(0, 1),
            'consult_reason' => $this->faker->text(200),
            'consult_date' => $this->faker->date(),
            'consult_start_time' => $this->faker->time('h:m:s'),
            'consult_finish_time' => $this->faker->time('h:m:s'),
            'branch_id' => $this->faker->numberBetween(1, 5),
            'updated_by' => $this->faker->numberBetween(1, 5),
            'update_note' => $this->faker->text(100),
        ];
    }
}
