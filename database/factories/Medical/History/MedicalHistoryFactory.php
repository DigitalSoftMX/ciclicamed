<?php

namespace Database\Factories\Medical\History;

use App\Models\Medical\History\MedicalHistory;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalHistoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var 'string'
     */
    protected $model = MedicalHistory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $jsonForm = json_encode([
            'type' => 'form',
            'form' => [
                'heredoFamiliares' => [
                    'hipertension' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'cancer' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'ginecologico' => [
                            'description' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'age' => $this->faker->numberBetween(1, 40)
                        ],
                        'otros' => [
                            'description' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'age' => $this->faker->numberBetween(1, 40)
                        ]
                    ],
                    'diabetesMellitus' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'patologiaTiroidea' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'otros' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ],
                'personalesNoPatologicos' => [
                    'alcoholismo' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'drogas' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'ejercicio' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'estrenimiento' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'tabaquismo' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'tipoSangre' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ],
                'personalesPatologicos' => [
                    'cirugias' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'transfusionales' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'infecciosas' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'cronicoDegenerativas' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'traumatismos' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'ginecologicos' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ],
                'ginecoObstetros' => [
                    'menarca' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'ritmo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'cantidad' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'toallas' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'dolor' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'tratamiento' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'fum' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'ivsa' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'parejas' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'mpf' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'gestas' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'cesareas' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'partos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'abortos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'ectopicos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'citologiaVertical' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'docma' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'autoexploracion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'usg' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'mastografia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'menopausia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'antecedentesInfertilidad' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'g1' => [
                        'anio' => $this->faker->numberBetween(1, 40),
                        'edad' => $this->faker->numberBetween(1, 40),
                        'duracion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'sexo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'peso' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'vivoSano' => $this->faker->numberBetween(0, 1),
                        'resol' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'comp' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'lactancia' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'g2' => [
                        'anio' => $this->faker->numberBetween(1, 40),
                        'edad' => $this->faker->numberBetween(1, 40),
                        'duracion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'sexo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'peso' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'vivoSano' => $this->faker->numberBetween(0, 1),
                        'resol' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'comp' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'lactancia' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'g3' => [
                        'anio' => $this->faker->numberBetween(1, 40),
                        'edad' => $this->faker->numberBetween(1, 40),
                        'duracion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'sexo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'peso' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'vivoSano' => $this->faker->numberBetween(0, 1),
                        'resol' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'comp' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'lactancia' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'g4' => [
                        'anio' => $this->faker->numberBetween(1, 40),
                        'edad' => $this->faker->numberBetween(1, 40),
                        'duracion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'sexo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'peso' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'vivoSano' => $this->faker->numberBetween(0, 1),
                        'resol' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'comp' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'lactancia' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ],
                'tratamientos' => [
                    'padecimientoActual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'exploracionFisica' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'gabineteLaboratoria' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'impresionDiagnostica' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'tratamiento' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'planMedico' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'pronostico' => [
                        'vida' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'funcion' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ]
            ]
        ]);


        return [
            'patient_id' => $this->faker->numberBetween(1, 25),
            'medicalconsult_id' => $this->faker->numberBetween(1, 50),
            'data' => $jsonForm,
            'updated_by' => $this->faker->numberBetween(1, 5),
            'update_note' => $this->faker->text(200),
        ];
    }
}
