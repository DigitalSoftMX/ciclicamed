<?php

namespace Database\Factories\Medical\Test;

use App\Models\Medical\Test\MedicalTestResult;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalTestResultFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalTestResult::class;

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
            'medicaltest_id' => $this->faker->numberBetween(1, 25),
            'created_by' => $this->faker->numberBetween(1, 5),
            'results' => $this->faker->randomElement([$jsonFiles, $jsonForm]),
            'result_note' => $this->faker->text(200),
            'updated_by' => $this->faker->numberBetween(1, 5),
            'update_note' => $this->faker->text(200),
            'medicalteststatus_id' => $this->faker->numberBetween(1, 5),
        ];
    }
}
