<?php

namespace Database\Factories\Medical\Test;

use App\Models\Medical\Test\MedicalTestOrderAnnotation;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalTestOrderAnnotationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalTestOrderAnnotation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $row = 107;
        return [
            'product_id' => $row++,
            'annotation' => $this->faker->text(200)
        ];
    }
}
