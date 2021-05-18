<?php

namespace Database\Factories\Medical\Attachment;

use App\Models\Medical\Attachment\MedicalAttachmentFollowUp;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalAttachmentFollowUpFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var => $this->faker->text($this->faker->numberBetween(25, 255)) ,     */
    protected $model = MedicalAttachmentFollowUp::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $jsonForm = json_encode([
            'type' => 'form',
            'form' => [
                'fum' => $this->faker->text($this->faker->numberBetween(5, 6)),
                'imc' => $this->faker->text($this->faker->numberBetween(5, 6)),
                'peso' => $this->faker->text($this->faker->numberBetween(5, 6)),
                'ta' => $this->faker->text($this->faker->numberBetween(5, 6)),
                'fc' => $this->faker->text($this->faker->numberBetween(5, 6)),
                'fr' => $this->faker->text($this->faker->numberBetween(5, 6)),
                'temperatura' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'diagnosticos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'subjetivo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'objetivo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'analisis' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'plan' => $this->faker->text($this->faker->numberBetween(25, 255)),
            ]
        ]);


        return [
            'medicalconsult_id' => $this->faker->numberBetween(1, 50),
            'data' => $jsonForm,
            'medicalspecialty_id' => $this->faker->numberBetween(1, 10),
            'updated_by' => $this->faker->numberBetween(1, 5),
            'update_note' => $this->faker->text(200),
        ];
    }
}
