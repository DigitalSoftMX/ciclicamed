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
        $hasChildren = $this->faker->numberBetween(0, 1);
        return [
            'business_name' => $this->faker->text(50),
            'has_children' => $hasChildren,
            'children_total' => $hasChildren === 0 ? null : $this->faker->regexify('[1-9]{1}'),
            'user_id' => $this->faker->unique()->numberBetween(1, 5)
        ];
    }
}
