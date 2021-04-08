<?php

namespace Database\Factories\Patient;

use App\Models\Patient\Preregistration;
use Illuminate\Database\Eloquent\Factories\Factory;

class PreregistrationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Preregistration::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'business_name' => $this->faker->text(50),
            'has_children' => $this->faker->numberBetween(0, 1),
            'children_total' => $this->faker->regexify('[0-9]{2}'),
            'user_id' => $this->faker->unique()->numberBetween(1, 5)
        ];
    }
}
