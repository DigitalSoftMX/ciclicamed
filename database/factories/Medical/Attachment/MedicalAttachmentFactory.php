<?php

namespace Database\Factories\Medical\Attachment;

use App\Models\Medical\Attachment\MedicalAttachment;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalAttachmentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var $this->faker->text($this->faker->numberBetween(25, 255)),
     */
    protected $model = MedicalAttachment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $medicalSpecialty = $this->faker->numberBetween(1, 10);
        $specialties = [
            $this->uroginecologia(),
            $this->climaterioSaludOsea(),
            $this->maternoFetal(),
            $this->nutricionPerinatal(),
            $this->nutricionGeneral(),
            'null',
            $this->biologiaReproduccion(),
            $this->cirugiaEndoscopica(),
            $this->oncologia(),
            $this->colpoposcopia()
        ];

        return [
            'patient_id' => $this->faker->numberBetween(1, 20),
            'data' => json_encode($specialties[$medicalSpecialty - 1]),
            'medicalspecialty_id' => $medicalSpecialty,
            'updated_by' => $this->faker->numberBetween(24, 50),
            'update_note' => $this->faker->text(200),
        ];
    }

    public function uroginecologia()
    {
        return [
            'type' => 'form',
            'form' => [
                'nictamero' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'consumoLitros' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'incontinenciaUrinariaUrgencia' => [
                    'check' => $this->faker->numberBetween(0, 1),
                    'tiempoEvolucion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'frecuencia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'cantidadPerdida' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'incontinenciaUrinariaEsfuerzo' => [
                    'check' => $this->faker->numberBetween(0, 1),
                    'tiempoEvolucion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'frecuencia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'cantidadPerdida' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'chorroMiccional' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'sensacionVacionamiento' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'interrogatorio' => [
                    'disuria' => $this->faker->numberBetween(0, 1),
                    'hematuria' => $this->faker->numberBetween(0, 1),
                    'sensacionCuerpoExtranio' => $this->faker->numberBetween(0, 1),
                    'resequedadVaginal' => $this->faker->numberBetween(0, 1),
                    'ardor' => $this->faker->numberBetween(0, 1),
                    'prurito' => $this->faker->numberBetween(0, 1),
                    'estrenimiento' => $this->faker->numberBetween(0, 1),
                    'consumoLaxantes' => $this->faker->numberBetween(0, 1),
                    'incontinenciaFlatos' => $this->faker->numberBetween(0, 1),
                    'vidaSexual' => $this->faker->numberBetween(0, 1),
                    'incontinenciaPenetracion' => $this->faker->numberBetween(0, 1),
                    'evacuacionesDia' => $this->faker->numberBetween(0, 5),
                    'dispareunia' => $this->faker->numberBetween(0, 1)
                ],
                'exploracionFisica' => [
                    'reflejosPerineales' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'pruebaTos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'atrofiaVaginal' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'notas' => $this->faker->text($this->faker->numberBetween(25, 255))
                ]
            ]
        ];
    }

    public function climaterioSaludOsea()
    {
        return [
            'type' => 'form',
            'form' => [
                'ciclosMenstruales' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'cantidadSangrado' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'toallas' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'dilgenorrea' => [
                    'check' => $this->faker->numberBetween(0, 1),
                    'description' => $this->faker->text($this->faker->numberBetween(25, 255)),
                ],
                'bochornos' => [
                    'check' => $this->faker->numberBetween(0, 1),
                    'description' => $this->faker->text($this->faker->numberBetween(25, 255)),
                ],
                'caidaCabello' => $this->faker->numberBetween(0, 1),
                'resequedadPiel' => $this->faker->numberBetween(0, 1),
                'labilidad' => $this->faker->numberBetween(0, 1),
                'irritabilidad' => $this->faker->numberBetween(0, 1),
                'ansiedad' => $this->faker->numberBetween(0, 1),
                'nerviosismo' => $this->faker->numberBetween(0, 1),
                'cefalea' => $this->faker->numberBetween(0, 1),
                'insomnio' => $this->faker->numberBetween(0, 1),
                'alteracionLibido' => $this->faker->numberBetween(0, 1),
                'resequedadVaginal' => $this->faker->numberBetween(0, 1),
                'sudoracion' => [
                    'check' => $this->faker->numberBetween(0, 1),
                    'description' => $this->faker->text($this->faker->numberBetween(25, 255)),
                ],
                'incontinenciaUrinaria' => [
                    'check' => $this->faker->numberBetween(0, 1),
                    'description' => $this->faker->text($this->faker->numberBetween(25, 255)),
                ],
                'notas' => $this->faker->text($this->faker->numberBetween(25, 255))
            ]
        ];
    }

    public function maternoFetal()
    {
        return [
            'type' => 'form',
            'form' => [
                'cuestionario' => [
                    'origenEtnico' => [
                        'etnia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'otra' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'fum' => [
                        'fum' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'consideraMenstruacion' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'existeAntecedenteComosomopatia' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'trisomia21' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'trisomia18' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'trisomia13' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'existeAntecedenteMalformacion' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'total' => [
                        'embarazos' => $this->faker->numberBetween(0, 5),
                        'partos' => $this->faker->numberBetween(0, 5),
                        'cesareas' => $this->faker->numberBetween(0, 5),
                        'abortos' => $this->faker->numberBetween(0, 5),
                        'ectopicos' => $this->faker->numberBetween(0, 5),
                        'molas' => $this->faker->numberBetween(0, 5)
                    ],
                    'muerteUtero' => [
                        'muerteAntes' => $this->faker->numberBetween(0, 1),
                        'muerteDespues' => [
                            'check' => $this->faker->numberBetween(0, 1),
                            'description' => $this->faker->numberBetween(0, 5)
                        ]
                    ],
                    'enfermera' => [
                        'peso' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'talla' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'brazoDerecho' => [
                            'sistole' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'diastole' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'brazoIzquierdo' => [
                            'sistole' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'diastole' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ]
                    ],
                    'tabaquismo' => [
                        'fuma' => $this->faker->numberBetween(0, 1),
                        'cantidad' => $this->faker->numberBetween(0, 5),
                        'fumaEmbarazo' => $this->faker->numberBetween(0, 1)
                    ],
                    'antecedentesPatologicos' => [
                        'diabetesMellitus' => $this->faker->numberBetween(0, 1),
                        'hipertension' => $this->faker->numberBetween(0, 1),
                        'lupusEritematoso' => $this->faker->numberBetween(0, 1),
                        'anticuerposAntifofolipidos' => $this->faker->numberBetween(0, 1),
                        'preeclamsia' => $this->faker->numberBetween(0, 1),
                        'madrePreeclamsia' => $this->faker->numberBetween(0, 1),
                        'otroAntecedentes' => $this->faker->numberBetween(0, 1),
                        'embarazoTratamientoReproduccion' => $this->faker->numberBetween(0, 1),
                        'inductoresOvulacion' => $this->faker->numberBetween(0, 1)
                    ],
                    'fertilizacionInvitro' => [
                        'fechaExtraccion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'fechaCongelacion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    ],
                    'donanteOvocitos' => [
                        'fechaNacimiento' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'edadAproximada' => $this->faker->numberBetween(0, 5)
                    ]
                ],
                'resultados' => [
                    'numeroFetos' => $this->faker->numberBetween(0, 5),
                    'multipleCorionicidad' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'feto1' => [
                        'localizacion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'lcc' => $this->faker->numberBetween(0, 5),
                        'semanas' => $this->faker->numberBetween(0, 5),
                        'fcf' => $this->faker->numberBetween(0, 5),
                        'translucenciaNucal' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'ipDuctoVenoso' => $this->faker->numberBetween(0, 1),
                        'ondaA' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'huesoNasal' => $this->faker->numberBetween(0, 1),
                        'regurgitacionTricuspidea' => $this->faker->numberBetween(0, 1),
                        'defectosMayores' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'placenta' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'calculoFactorRiesgo' => [
                            'trisonomia21' => [
                                'riesgoBasal' => $this->faker->numberBetween(0, 5),
                                'usg' => $this->faker->numberBetween(0, 5),
                                'duoTest' => $this->faker->numberBetween(0, 5)
                            ],
                            'trisonomia18' => [
                                'riesgoBasal' => $this->faker->numberBetween(0, 5),
                                'usg' => $this->faker->numberBetween(0, 5),
                                'duoTest' => $this->faker->numberBetween(0, 5)
                            ],
                            'trisonomia13' => [
                                'riesgoBasal' => $this->faker->numberBetween(0, 5),
                                'usg' => $this->faker->numberBetween(0, 5),
                                'duoTest' => $this->faker->numberBetween(0, 5)
                            ]
                        ]
                    ],
                    'feto2' => [
                        'localizacion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'lcc' => $this->faker->numberBetween(0, 5),
                        'semanas' => $this->faker->numberBetween(0, 5),
                        'fcf' => $this->faker->numberBetween(0, 5),
                        'translucenciaNucal' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'ipDuctoVenoso' => $this->faker->numberBetween(0, 1),
                        'ondaA' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'huesoNasal' => $this->faker->numberBetween(0, 1),
                        'regurgitacionTricuspidea' => $this->faker->numberBetween(0, 1),
                        'defectosMayores' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'placenta' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'calculoFactorRiesgo' => [
                            'trisonomia21' => [
                                'riesgoBasal' => $this->faker->numberBetween(0, 5),
                                'usg' => $this->faker->numberBetween(0, 5),
                                'duoTest' => $this->faker->numberBetween(0, 5)
                            ],
                            'trisonomia18' => [
                                'riesgoBasal' => $this->faker->numberBetween(0, 5),
                                'usg' => $this->faker->numberBetween(0, 5),
                                'duoTest' => $this->faker->numberBetween(0, 5)
                            ],
                            'trisonomia13' => [
                                'riesgoBasal' => $this->faker->numberBetween(0, 5),
                                'usg' => $this->faker->numberBetween(0, 5),
                                'duoTest' => $this->faker->numberBetween(0, 5)
                            ]
                        ]
                    ],
                    'feto3' => [
                        'localizacion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'lcc' => $this->faker->numberBetween(0, 5),
                        'semanas' => $this->faker->numberBetween(0, 5),
                        'fcf' => $this->faker->numberBetween(0, 5),
                        'translucenciaNucal' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'ipDuctoVenoso' => $this->faker->numberBetween(0, 1),
                        'ondaA' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'huesoNasal' => $this->faker->numberBetween(0, 1),
                        'regurgitacionTricuspidea' => $this->faker->numberBetween(0, 1),
                        'defectosMayores' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'placenta' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'calculoFactorRiesgo' => [
                            'trisonomia21' => [
                                'riesgoBasal' => $this->faker->numberBetween(0, 5),
                                'usg' => $this->faker->numberBetween(0, 5),
                                'duoTest' => $this->faker->numberBetween(0, 5)
                            ],
                            'trisonomia18' => [
                                'riesgoBasal' => $this->faker->numberBetween(0, 5),
                                'usg' => $this->faker->numberBetween(0, 5),
                                'duoTest' => $this->faker->numberBetween(0, 5)
                            ],
                            'trisonomia13' => [
                                'riesgoBasal' => $this->faker->numberBetween(0, 5),
                                'usg' => $this->faker->numberBetween(0, 5),
                                'duoTest' => $this->faker->numberBetween(0, 5)
                            ]
                        ]
                    ],
                    'dopplerArteriasUterinas' => [
                        'ipArteriaDerecha' => [
                            'description' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'notch' => $this->faker->numberBetween(0, 1)
                        ],
                        'ipArteriaIzquierda' => [
                            'description' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'notch' => $this->faker->numberBetween(0, 1)
                        ],
                        'ipMedioArterias' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'longitudCervical' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'marcadoresSericos' => [
                        'fechaToma' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'fechaProcesamiento' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'bhgc' => [
                            'bhgc' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'mom' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'pappa' => [
                            'pappa' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'mom' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'pigf' => [
                            'pigf' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'mom' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ]
                    ],
                    'calculoRiesgo' => [
                        'preclamsia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'restriccionCrecimiento' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'partoPretermino' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ]
            ]
        ];
    }

    public function nutricionPerinatal()
    {
        return [
            'type' => 'form',
            'form' => [
                'embarazosAnteriores' => [
                    'numeroEmbarazos' => $this->faker->numberBetween(0, 5),
                    'embarazo1' => [
                        'pesoPregestacional' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'pesoFinalEmbarazo' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'embarazo2' => [
                        'pesoPregestacional' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'pesoFinalEmbarazo' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'embarazo3' => [
                        'pesoPregestacional' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'pesoFinalEmbarazo' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ],
                'embarazoActual' => [
                    'fechaInicioTX' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'semanasGestacion' => $this->faker->numberBetween(0, 5),
                    'trimestre' => $this->faker->numberBetween(0, 5),
                    'pesoPreGestacional' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'imc' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'antecedentesSalud' => [
                    'problemasActuales' => [
                        'diarrea' => $this->faker->numberBetween(0, 1),
                        'estrenimiento' => $this->faker->numberBetween(0, 1),
                        'gastitris' => $this->faker->numberBetween(0, 1),
                        'ulcera' => $this->faker->numberBetween(0, 1),
                        'nauseas' => $this->faker->numberBetween(0, 1),
                        'pirosis' => $this->faker->numberBetween(0, 1),
                        'vomito' => $this->faker->numberBetween(0, 1),
                        'colitis' => $this->faker->numberBetween(0, 1),
                        'dentadura' => $this->faker->numberBetween(0, 1),
                        'otros' => [
                            'check' => $this->faker->numberBetween(0, 1),
                            'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ]
                    ],
                    'observaciones' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'ta' => [
                        'brazoDerecho' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'brazoIzquierdo' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'padeceEnfermedadDiagnosticada' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'padecioEnfermedadImportante' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'complicacionesAnteriores' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'tomaMedicamento' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'medicamento1' => [
                            'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'dosis' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'cuando' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'medicamento2' => [
                            'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'dosis' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'cuando' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'medicamento3' => [
                            'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'dosis' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'cuando' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ]
                    ],
                    'toma' => [
                        'laxantes' => $this->faker->numberBetween(0, 1),
                        'diureticos' => $this->faker->numberBetween(0, 1),
                        'antiacidos' => $this->faker->numberBetween(0, 1),
                        'analgesicos' => $this->faker->numberBetween(0, 1)
                    ],
                    'cirugiaAnterior' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'antecedentesFamiliares' => [
                    'obesidad' => $this->faker->numberBetween(0, 1),
                    'hta' => $this->faker->numberBetween(0, 1),
                    'cancer' => $this->faker->numberBetween(0, 1),
                    'hipercolesterolemia' => $this->faker->numberBetween(0, 1),
                    'hipertrigliceridemia' => $this->faker->numberBetween(0, 1),
                    'diabetes' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ],
                'actividadFisica' => [
                    'profesion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'practicaDeporte' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'cuantoTiempo' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'consumoFrecuencia' => [
                    'alcohol' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'cantidad' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'frecuencia' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'tabaco' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'cantidad' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'frecuencia' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'cafe' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'cantidad' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'frecuencia' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ],
                'indicadoresBioquimicos' => [
                    'ultimoEstudios' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'datosBioquimicos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'analisis' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'glucosaCapilar' => [
                        'glucosa1' => [
                            'dia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'glucosa' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'glucosa2' => [
                            'dia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'glucosa' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'glucosa3' => [
                            'dia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'glucosa' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ]
                    ]
                ],
                'indicadoresDieteticos' => [
                    'comidas' => $this->faker->numberBetween(0, 5),
                    'preparaAlimentos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'comeEntreComidas' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'modificadoAlimentacion' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'porQue' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'como' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'apetito' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'horaHambre' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'alimentosPreferidos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'alimentosNoAgradan' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'alimentosMalestar' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'alergico' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'tomaSuplemento' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'suplementos' => [
                            'suplemento1' => [
                                'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                                'dosis' => $this->faker->text($this->faker->numberBetween(25, 255))
                            ],
                            'suplemento2' => [
                                'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                                'dosis' => $this->faker->text($this->faker->numberBetween(25, 255))
                            ],
                            'suplemento3' => [
                                'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                                'dosis' => $this->faker->text($this->faker->numberBetween(25, 255))
                            ]
                        ]
                    ],
                    'consumoVariaTriste' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'agregaSal' => $this->faker->numberBetween(0, 1),
                    'grasaUtiliza' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'dietaEspecial' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'dietas' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'cuantas' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'tipo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'haceCuanto' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'porCuanto' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'porQue' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'tantoApego' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'obtuvoResultados' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'kgPerdidos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'pesoLogrado' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'medicamentosBajar' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'cuales' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'cuantoTiempo' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'plan' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'recordatorioNutricion' => [
                    'entreSemana' => [
                        'desayuno' => [
                            'desayuno' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'colacion' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'comida' => [
                            'comida' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'colacion' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'cena' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'finSemana' => [
                        'desayuno' => [
                            'desayuno' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'colacion' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'comida' => [
                            'comida' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'colacion' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'cena' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'alimentosOlvidados' => [
                        'chicles' => $this->faker->numberBetween(0, 1),
                        'mentas' => $this->faker->numberBetween(0, 1),
                        'patillas' => $this->faker->numberBetween(0, 1),
                        'mermeladas' => $this->faker->numberBetween(0, 1),
                        'miel' => $this->faker->numberBetween(0, 1),
                        'azucar' => $this->faker->numberBetween(0, 1),
                        'sustituto' => $this->faker->numberBetween(0, 1),
                        'crema' => $this->faker->numberBetween(0, 1),
                        'dulces' => $this->faker->numberBetween(0, 1),
                        'mantequilla' => $this->faker->numberBetween(0, 1),
                        'aceite' => $this->faker->numberBetween(0, 1),
                        'mayonesa' => $this->faker->numberBetween(0, 1),
                        'aderezo' => $this->faker->numberBetween(0, 1),
                        'vinagretas' => $this->faker->numberBetween(0, 1),
                        'sal' => $this->faker->numberBetween(0, 1),
                        'salsas' => $this->faker->numberBetween(0, 1)
                    ]
                    ],
                    'antropometria' => [
                        'fum' => '',
                        'consulta1' => [
                            'fecha' => '',
                            'peso' => '',
                            'kcal' => '',
                            'aumentoPeso' => '',
                            'pesoideal' => '',
                            'diarrea' => false,
                            'estrenimiento' => false,
                            'gastritis' => false,
                            'ulcera' => false,
                            'nauseas' => false,
                            'pirosis' => false,
                            'vomito' => false,
                            'colitis' => false,
                            'observaciones' => '',
                        ],
                        'consulta2' => [
                            'fecha' => '',
                            'peso' => '',
                            'kcal' => '',
                            'aumentoPeso' => '',
                            'pesoideal' => '',
                            'diarrea' => false,
                            'estrenimiento' => false,
                            'gastritis' => false,
                            'ulcera' => false,
                            'nauseas' => false,
                            'pirosis' => false,
                            'vomito' => false,
                            'colitis' => false,
                            'observaciones' => '',
                        ],
                        'consulta3' => [
                            'fecha' => '',
                            'peso' => '',
                            'kcal' => '',
                            'aumentoPeso' => '',
                            'pesoideal' => '',
                            'diarrea' => false,
                            'estrenimiento' => false,
                            'gastritis' => false,
                            'ulcera' => false,
                            'nauseas' => false,
                            'pirosis' => false,
                            'vomito' => false,
                            'colitis' => false,
                            'observaciones' => '',
                        ],
                        'consulta4' => [
                            'fecha' => '',
                            'peso' => '',
                            'kcal' => '',
                            'aumentoPeso' => '',
                            'pesoideal' => '',
                            'diarrea' => false,
                            'estrenimiento' => false,
                            'gastritis' => false,
                            'ulcera' => false,
                            'nauseas' => false,
                            'pirosis' => false,
                            'vomito' => false,
                            'colitis' => false,
                            'observaciones' => '',
                        ],
                        'consulta5' => [
                            'fecha' => '',
                            'peso' => '',
                            'kcal' => '',
                            'aumentoPeso' => '',
                            'pesoideal' => '',
                            'diarrea' => false,
                            'estrenimiento' => false,
                            'gastritis' => false,
                            'ulcera' => false,
                            'nauseas' => false,
                            'pirosis' => false,
                            'vomito' => false,
                            'colitis' => false,
                            'observaciones' => '',
                        ]
                    ]
            ]
        ];
    }

    public function nutricionGeneral()
    {
        return [
            'type' => 'form',
            'form' => [
                'peso' => [
                    'pesoMinimo' => [
                        'pesoMinimo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'haceCuanto' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'desdeCuanto' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'pesoMaximo' => [
                        'pesoMinimo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'haceCuanto' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'desdeCuanto' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'pesoHabitual' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'antecedentesSalud' => [
                    'problemasActuales' => [
                        'diarrea' => $this->faker->numberBetween(0, 1),
                        'estrenimiento' => $this->faker->numberBetween(0, 1),
                        'gastitris' => $this->faker->numberBetween(0, 1),
                        'ulcera' => $this->faker->numberBetween(0, 1),
                        'nauseas' => $this->faker->numberBetween(0, 1),
                        'pirosis' => $this->faker->numberBetween(0, 1),
                        'vomito' => $this->faker->numberBetween(0, 1),
                        'colitis' => $this->faker->numberBetween(0, 1),
                        'dentadura' => $this->faker->numberBetween(0, 1),
                        'otros' => [
                            'check' => $this->faker->numberBetween(0, 1),
                            'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ]
                    ],
                    'observaciones' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'ta' => [
                        'brazoDerecho' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'brazoIzquierdo' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'padeceEnfermedadDiagnosticada' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'padecioEnfermedadImportante' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'complicacionesAnteriores' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'tomaMedicamento' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'medicamento1' => [
                            'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'dosis' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'cuando' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'medicamento2' => [
                            'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'dosis' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'cuando' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'medicamento3' => [
                            'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'dosis' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'cuando' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ]
                    ],
                    'toma' => [
                        'laxantes' => $this->faker->numberBetween(0, 1),
                        'diureticos' => $this->faker->numberBetween(0, 1),
                        'antiacidos' => $this->faker->numberBetween(0, 1),
                        'analgesicos' => $this->faker->numberBetween(0, 1)
                    ],
                    'cirugiaAnterior' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'antecedentesFamiliares' => [
                    'obesidad' => $this->faker->numberBetween(0, 1),
                    'hta' => $this->faker->numberBetween(0, 1),
                    'cancer' => $this->faker->numberBetween(0, 1),
                    'hipercolesterolemia' => $this->faker->numberBetween(0, 1),
                    'hipertrigliceridemia' => $this->faker->numberBetween(0, 1),
                    'diabetes' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ],
                'aspectosGinecologicos' => [
                    'embarazoActual' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'semanasGestacion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'pesoPregestacional' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'anticonceptivosOrales' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'dosis' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'sx' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'climaterio' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'terapiaReemplazoHormonal' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'dosis' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'sx' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ],
                'actividadFisica' => [
                    'profesion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'practicaDeporte' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'cuantoTiempo' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'consumoFrecuencia' => [
                    'alcohol' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'cantidad' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'frecuencia' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'tabaco' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'cantidad' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'frecuencia' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'cafe' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'cantidad' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'frecuencia' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ]
                ],
                'indicadoresBioquimicos' => [
                    'ultimoEstudios' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'datosBioquimicos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'analisis' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'glucosaCapilar' => [
                        'glucosa1' => [
                            'dia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'glucosa' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'glucosa2' => [
                            'dia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'glucosa' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'glucosa3' => [
                            'dia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'glucosa' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ]
                    ]
                ],
                'indicadoresDieteticos' => [
                    'comidas' => $this->faker->numberBetween(0, 5),
                    'preparaAlimentos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'comeEntreComidas' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'modificadoAlimentacion' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'porQue' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'como' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'apetito' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'horaHambre' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'alimentosPreferidos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'alimentosNoAgradan' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'alimentosMalestar' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'alergico' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'tomaSuplemento' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'suplementos' => [
                            'suplemento1' => [
                                'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                                'dosis' => $this->faker->text($this->faker->numberBetween(25, 255))
                            ],
                            'suplemento2' => [
                                'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                                'dosis' => $this->faker->text($this->faker->numberBetween(25, 255))
                            ],
                            'suplemento3' => [
                                'cual' => $this->faker->text($this->faker->numberBetween(25, 255)),
                                'dosis' => $this->faker->text($this->faker->numberBetween(25, 255))
                            ]
                        ]
                    ],
                    'consumoVariaTriste' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'agregaSal' => $this->faker->numberBetween(0, 1),
                    'grasaUtiliza' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'dietaEspecial' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'dietas' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'cuantas' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'tipo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'haceCuanto' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'porCuanto' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'porQue' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'tantoApego' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'obtuvoResultados' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'kgPerdidos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'pesoLogrado' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'medicamentosBajar' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'cuales' => $this->faker->text($this->faker->numberBetween(25, 255)),
                        'cuantoTiempo' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'plan' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'recordatorioNutricion' => [
                    'entreSemana' => [
                        'desayuno' => [
                            'desayuno' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'colacion' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'comida' => [
                            'comida' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'colacion' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'cena' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'finSemana' => [
                        'desayuno' => [
                            'desayuno' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'colacion' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'comida' => [
                            'comida' => $this->faker->text($this->faker->numberBetween(25, 255)),
                            'colacion' => $this->faker->text($this->faker->numberBetween(25, 255))
                        ],
                        'cena' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'alimentosOlvidados' => [
                        'chicles' => $this->faker->numberBetween(0, 1),
                        'mentas' => $this->faker->numberBetween(0, 1),
                        'patillas' => $this->faker->numberBetween(0, 1),
                        'mermeladas' => $this->faker->numberBetween(0, 1),
                        'miel' => $this->faker->numberBetween(0, 1),
                        'azucar' => $this->faker->numberBetween(0, 1),
                        'sustituto' => $this->faker->numberBetween(0, 1),
                        'crema' => $this->faker->numberBetween(0, 1),
                        'dulces' => $this->faker->numberBetween(0, 1),
                        'mantequilla' => $this->faker->numberBetween(0, 1),
                        'aceite' => $this->faker->numberBetween(0, 1),
                        'mayonesa' => $this->faker->numberBetween(0, 1),
                        'aderezo' => $this->faker->numberBetween(0, 1),
                        'vinagretas' => $this->faker->numberBetween(0, 1),
                        'sal' => $this->faker->numberBetween(0, 1),
                        'salsas' => $this->faker->numberBetween(0, 1)
                    ]
                ],
                'antropometricos' => [
                    'pesoMinino' => 0,
                    'pesoMaximo' => 0,
                    'pesoIdeal' => 0,
                    'indicador' => '',
                    'sem1' => [
                        'fecha' => '',
                        'talla' => 0,
                        'peso' => 0,
                        'cintura' => 0,
                        'abdomen' => 0,
                        'cadera' => 0,
                        'imc' => 0,
                        'notas' => '',
                    ],
                    'sem2' => [
                        'fecha' => '',
                        'talla' => 0,
                        'peso' => 0,
                        'cintura' => 0,
                        'abdomen' => 0,
                        'cadera' => 0,
                        'imc' => 0,
                        'notas' => '',
                    ],
                    'sem3' => [
                        'fecha' => '',
                        'talla' => 0,
                        'peso' => 0,
                        'cintura' => 0,
                        'abdomen' => 0,
                        'cadera' => 0,
                        'imc' => 0,
                        'notas' => '',
                    ],
                    'sem4' => [
                        'fecha' => '',
                        'talla' => 0,
                        'peso' => 0,
                        'cintura' => 0,
                        'abdomen' => 0,
                        'cadera' => 0,
                        'imc' => 0,
                        'notas' => '',
                    ],
                    'total1' => [
                        'fecha' => '',
                        'talla' => 0,
                        'peso' => 0,
                        'cintura' => 0,
                        'abdomen' => 0,
                        'cadera' => 0,
                        'imc' => 0,
                        'notas' => '',
                    ],
                    'sem5' => [
                        'fecha' => '',
                        'talla' => 0,
                        'peso' => 0,
                        'cintura' => 0,
                        'abdomen' => 0,
                        'cadera' => 0,
                        'imc' => 0,
                        'notas' => '',
                    ],
                    'sem6' => [
                        'fecha' => '',
                        'talla' => 0,
                        'peso' => 0,
                        'cintura' => 0,
                        'abdomen' => 0,
                        'cadera' => 0,
                        'imc' => 0,
                        'notas' => '',
                    ],
                    'sem7' => [
                        'fecha' => '',
                        'talla' => 0,
                        'peso' => 0,
                        'cintura' => 0,
                        'abdomen' => 0,
                        'cadera' => 0,
                        'imc' => 0,
                        'notas' => '',
                    ],
                    'sem8' => [
                        'fecha' => '',
                        'talla' => 0,
                        'peso' => 0,
                        'cintura' => 0,
                        'abdomen' => 0,
                        'cadera' => 0,
                        'imc' => 0,
                        'notas' => '',
                    ],
                    'total2' => [
                        'fecha' => '',
                        'talla' => 0,
                        'peso' => 0,
                        'cintura' => 0,
                        'abdomen' => 0,
                        'cadera' => 0,
                        'imc' => 0,
                        'notas' => '',
                    ]
                ]
            ]
        ];
    }

    public function biologiaReproduccion()
    {
        return [
            'type' => 'form',
            'form' => [
                'biologiaReproduccion' => [
                    'tiempoBusquedaEmbarazo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'frecuenciaCoital' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'penetracion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'dispareunia' => $this->faker->numberBetween(0, 1),
                    'eyaculacionVaginal' => $this->faker->numberBetween(0, 1),
                    'dismenorrea' => $this->faker->numberBetween(0, 1)
                ],
                'factorMasculino' => [
                    'edad' => $this->faker->numberBetween(0, 5),
                    'paternidadComrpobada' => $this->faker->numberBetween(0, 1),
                    'ocupacion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'traumatismo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'antecedentesParotiditis' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'ebd' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'factorTuboperitoneal' => [
                    'cirugiasAbdominales' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'infeccionesVaginales' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'factorEndocrino' => [
                    'ciclos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'cantidad' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'factorCervical' => [
                    'infeccionVaginal' => $this->faker->numberBetween(0, 1),
                    'ultimoPapanicolau' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'anterioresLesiones' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'anterioresCirugias' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'notas' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'estimulacion' => [
                    'inseminacionesPrevias' => '',
                    'gnrh' => '',
                    'diaInicio' => '',
                    'dosis' => '',
                    'hasta' => '',
                    'sosten' => '',
                    'dosis2' => '',
                    'fechaInicio2' => '',
                    'bhcg' => '',
                    'resultados' => '',
                    'observaciones' => '',
                    'estimulacion' => [
                        'estimulacion1' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion2' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion3' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion4' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion5' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion6' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion7' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion8' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion9' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion10' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion11' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion12' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion13' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion14' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                        'estimulacion15' => [
                            'dia' => '',
                            'clomifeno' => '',
                            'gnrh' => '',
                            'hmg' => '',
                            'fsh' => '',
                            'hcg' => '',
                            'otros' => '',
                            'antagonista' => '',
                            'dimesionesOD' => '',
                            'dimensionesOI' => '',
                            'endometrio' => '',
                        ],
                    ]
                ]
            ]
        ];
    }

    public function cirugiaEndoscopica()
    {
        return [
            'type' => 'form',
            'form' => [
                'cervix' => [
                    'penetracion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'oce' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'canalEndocervical' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'epitelioGlandular' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'oci' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'utero' => [
                    'posicion' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'cavidadUterina' => [
                    'distension' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'defectos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'tamanio' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'forma' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'endometrio' => [
                    'atrofico' => $this->faker->numberBetween(0, 1),
                    'proliferativo' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'secretor' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'anormal' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'ostium' => [
                    'derecho' => [
                        'checked' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'izquierdo' => [
                        'checked' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'visible' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'tomaBiopsia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'colocacionDiu' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'resultadoBiopsia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'planQuirurgico' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'notas' => $this->faker->text($this->faker->numberBetween(25, 255))
            ]
        ];
    }

    public function oncologia()
    {
        return [
            'type' => 'form',
            'form' => [
                'historiaFamiliar' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'menarca' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'edadPrimerEmbarazo' => $this->faker->numberBetween(0, 5),
                'lanctanciaMaterna' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'usoHormonas' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'notas' => $this->faker->text($this->faker->numberBetween(25, 255))
            ]
        ];
    }

    public function colpoposcopia()
    {
        return [
            'type' => 'form',
            'form' => [
                'antecedentesImportancia' => [
                    'antecedentesObstetricos' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'frecuenciaCoital' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'usoHormonales' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'citologiaVerticalPrevia' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'cervix' => [
                    'volumen' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'zonaTransformacion' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'estudioColposcopia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'evasionGlandular' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'atrofiaEpitelial' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'quistesNaboth' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'tumoracion' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'aplicacionAcidoAcetico' => [
                    'epitelioAcetoblanco' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'borde' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'mosaico' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'superficie' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'testSchiller' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'vaginoscopia' => [
                    'leucorrea' => [
                        'check' => $this->faker->numberBetween(0, 1),
                        'description' => $this->faker->text($this->faker->numberBetween(25, 255))
                    ],
                    'epitelioAcetoblanco' => $this->faker->text($this->faker->numberBetween(25, 255)),
                    'captacionLugol' => $this->faker->text($this->faker->numberBetween(25, 255))
                ],
                'vulvoscopia' => $this->faker->text($this->faker->numberBetween(25, 255)),
                'diagnosticoColposcopico' => $this->faker->text($this->faker->numberBetween(25, 255))
            ]
        ];
    }
}
