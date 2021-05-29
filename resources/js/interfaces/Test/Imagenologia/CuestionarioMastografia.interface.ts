export interface CuestionarioMastografia
{
    antecedentesFamiliares: {
        antecedentesCancerMama: {
            check: boolean,
            description: string
        },
        familiarConCancer: {
            check: boolean,
            description: string
        }
    };
    antecedentesPersonales: {
        cambioMamas: {
            check: boolean,
            description: string
        },
        imagen: string,
        dolor: boolean,
        masaPalpable: boolean,
        cambiosPiel: boolean,
        aumentoVolumen: boolean,
        secrecionPezon: boolean,
        inversionPezon: boolean,
        otros: string,
        desdeCuando: string,
        seniaParticularMamas: string
        primeraMenstruacion: number,
        inicioVidaSexual: number,
        embarazos: number,
        partos: number,
        cesareas: number,
        abortos: number,
        metodoAnticonceptivo: {
            check: boolean,
            description: string
        },
        hormonal: {
            check: boolean,
            description: string
        },
        edadMenopausia: number,
        fum: string
    },
    antecedentesQuirurgicos: {
        biopsiaMama: {
            check: boolean,
            description: string
        },
        masectomia: {
            check: boolean,
            description: string,
            fecha: string
        },
        biopsiaGanglios: {
            check: boolean,
            description: string,
            fecha: string
        },
        implantesMamarios: {
            check: boolean,
            description: string,
            fecha: string
        },
        recambioImplantes: {
            check: boolean,
            description: string,
            fecha: string
        },
        reduccionMamarias: {
            check: boolean,
            description: string,
            fecha: string
        },
        radioterapia: {
            check: boolean,
            description: string
        },
        mastografia: {
            check: boolean,
            description: string,
            diagnostico: string
        }

    }

}