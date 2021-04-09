<?php

namespace Database\Factories\Medical\Attachment;

use App\Models\Medical\Attachment\MedicalAttachmentForm;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalAttachmentFormFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalAttachmentForm::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->text(150),
            'medicalspecialty_id' => $this->faker->numberBetween(1, 5)
        ];
    }
}
