import { CuestionarioMastografia } from "@interface/Medical/Test/Imagenologia/CuestionarioMastografia.interface"

export const CuestionarioMastografiaData: CuestionarioMastografia = {
    antecedentesFamiliares: {
        antecedentesCancerMama: {
            check: false,
            description: ''
        },
        familiarConCancer: {
            check: false,
            description: ''
        }
    },
    antecedentesPersonales: {
        cambioMamas: {
            check: false,
            description: ''
        },
        imagen: '',
        dolor: false,
        masaPalpable: false,
        cambiosPiel: false,
        aumentoVolumen: false,
        secrecionPezon: false,
        inversionPezon: false,
        otros: '',
        desdeCuando: '',
        seniaParticularMamas: '',
        primeraMenstruacion: 0,
        inicioVidaSexual: 0,
        embarazos: 0,
        partos: 0,
        cesareas: 0,
        abortos: 0,
        metodoAnticonceptivo: {
            check: false,
            description: ''
        },
        hormonal: {
            check: false,
            description: ''
        },
        edadMenopausia: 0,
        fum: ''
    },
    antecedentesQuirurgicos: {
        biopsiaMama: {
            check: false,
            description: ''
        },
        masectomia: {
            check: false,
            description: '',
            fecha: ''
        },
        biopsiaGanglios: {
            check: false,
            description: '',
            fecha: ''
        },
        implantesMamarios: {
            check: false,
            description: '',
            fecha: ''
        },
        recambioImplantes: {
            check: false,
            description: '',
            fecha: ''
        },
        reduccionMamarias: {
            check: false,
            description: '',
            fecha: ''
        },
        radioterapia: {
            check: false,
            description: ''
        },
        mastografia: {
            check: false,
            description: '',
            diagnostico: ''
        }

    }

}