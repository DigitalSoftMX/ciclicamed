<?php

namespace Database\Factories\Patient;

use App\Models\Patient\InvoiceData;
use Illuminate\Database\Eloquent\Factories\Factory;

class InvoiceDataFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = InvoiceData::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'patient_id' => $this->faker->numberBetween(1, 5),
            'business_name' => $this->faker->company,
            'rfc' => $this->faker->regexify('[A-Za-z0-9]{13}'),
            'email' => $this->faker->unique()->safeEmail,
            'phone'=> $this->faker->regexify('[0-9]{10}'),
            'cfdi' => $this->faker->unique(true)->numberBetween(1, 5).'.png',
            'country' => $this->faker->country
        ];
    }
}
