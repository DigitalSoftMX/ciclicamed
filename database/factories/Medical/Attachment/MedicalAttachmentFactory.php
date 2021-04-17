<?php

namespace Database\Factories\Medical\Attachment;

use App\Models\Medical\Attachment\MedicalAttachment;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalAttachmentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalAttachment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $jsonFiles = json_encode([
            'type' => 'files',
            'files' => [
                '1' => $this->faker->numberBetween(1, 5).'.pdf',
                '2' => $this->faker->numberBetween(1, 5).'.pdf',
                '3' => $this->faker->numberBetween(1, 5).'.pdf',
            ]
        ]);

        $jsonForm = json_encode([
            'type' => 'form',
            'form' => [
                ''.$this->faker->word().'' => ''.$this->faker->text(200).'',
                ''.$this->faker->word().'' => ''.$this->faker->text(200).'',
                ''.$this->faker->word().'' => ''.$this->faker->text(200).'',
                ''.$this->faker->word().'' => ''.$this->faker->text(200).'',
                ''.$this->faker->word().'' => ''.$this->faker->text(200).'',
                ''.$this->faker->word().'' => ''.$this->faker->text(200).'',
                ''.$this->faker->word().'' => ''.$this->faker->text(200).'',
                ''.$this->faker->word().'' => ''.$this->faker->text(200).'',
                ''.$this->faker->word().'' => ''.$this->faker->text(200).'',
                ''.$this->faker->word().'' => ''.$this->faker->text(200).'',
            ]
        ]);


        return [
            'medicalconsult_id' => $this->faker->numberBetween(1, 50),
            'data' => $this->faker->randomElement([$jsonFiles, $jsonForm]),
            'medicalattachmentform_id' => $this->faker->numberBetween(1, 15),
            'updated_by' => $this->faker->numberBetween(1, 5),
            'update_note' => $this->faker->text(200),
        ];
    }
}
