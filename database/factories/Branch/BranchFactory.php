<?php

namespace Database\Factories\Branch;

use App\Models\Branch\Branch;
use Illuminate\Database\Eloquent\Factories\Factory;

class BranchFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Branch::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->company,
            'address' => $this->faker->address,
            'phone' => $this->faker->regexify('[0-9]{10}'),
            'opening_hours' => $this->faker->time('H:i').' - '.$this->faker->time('H:i')
        ];
    }
}
