<?php

namespace Database\Factories\Patient;

use App\Models\Patient\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Patient::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $user = 1;
        return [
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            // 'first_name' => $this->faker->unique()->firstName(),
            // 'last_name' => $this->faker->unique()->lastName(),
            'gender' => $this->faker->numberBetween(0, 1),
            'birthday' => $this->faker->dateTimeThisCentury->format('Y-m-d'),
            'address' => $this->faker->address,
            'phone' => $this->faker->regexify('[0-9]{10}'),
            'cellphone' => $this->faker->regexify('[0-9]{10}'),
            'email' => $this->faker->safeEmail(),
            //'email' => $this->faker->unique()->safeEmail(),
            'photo' => $this->faker->regexify('[A-Za-z0-9]{25}'),
            'preregistration_id' => $user++
        ];
    }
}
