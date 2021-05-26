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
        $json = json_encode([
            'type' => 'form',
            'form' => [
                'expediente' => $this->faker->text($this->faker->numberBetween(5, 15)),
                'lugarNacimiento' => [
                    'ciudad' => $this->faker->text($this->faker->numberBetween(5, 15)),
                    'estado' => $this->faker->text($this->faker->numberBetween(5, 15))
                ],
                'seguroGastos' => [
                    'check' => $this->faker->numberBetween(0, 1),
                    'description' => $this->faker->text($this->faker->numberBetween(5, 15))
                ],
                'datosPareja' => [
                    'apellidos' => $this->faker->text($this->faker->numberBetween(5, 15)),
                    'nombre' => $this->faker->text($this->faker->numberBetween(5, 15)),
                    'edad' => 0,
                    'ocupacion' => $this->faker->text($this->faker->numberBetween(5, 15)),
                    'telefono' => $this->faker->text($this->faker->numberBetween(5, 15)),
                    'correo' => $this->faker->text($this->faker->numberBetween(5, 15))
                ],
                'recomendacion' => [
                    'check' => $this->faker->numberBetween(0, 1),
                    'description' => $this->faker->text($this->faker->numberBetween(5, 15)),
                    'nombreRecomienda' => $this->faker->text($this->faker->numberBetween(5, 15))
                ],
                'facebook' => $this->faker->numberBetween(0, 1),
                'instagram' => $this->faker->numberBetween(0, 1),
                'folletos' => $this->faker->numberBetween(0, 1),
                'paginaInternet' => $this->faker->numberBetween(0, 1),
                'busquedaInternet' => $this->faker->numberBetween(0, 1),
                'lugarTrabajo' => $this->faker->text($this->faker->numberBetween(5, 15)),
                'hijos' => [
                    'check' => $this->faker->numberBetween(0, 1),
                    'description' => $this->faker->numberBetween(0, 1)
                ]
            ]
        ]);

        static $user = 1;
        return [
            'data' => $json,
            'user_id' => $user++
        ];
    }
}
