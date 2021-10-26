export interface MaternoFetalCuestionario
{
    /* origenEtnico: {
        etnia: string,
        otra: string
    },
    fum: {
        fum: string,
        consideraMenstruacion: string
    }, */
    /* existeAntecedenteComosomopatia: {
        check: boolean,
        trisomia21: string,
        trisomia18: string,
        trisomia13: string
    }, */
    /* existeAntecedenteMalformacion: {
        check: boolean,
        description: string
    },
    total: {
        embarazos: number,
        partos: number,
        cesareas: number,
        abortos: number,
        ectopicos: number,
        molas: number
    },
    muerteUtero: {
        muerteAntes: boolean,
        muerteDespues: {
            check: boolean,
            description: number
        }
    },
     */
    enfermera: {
        peso: string,
        talla: string,
        brazoDerecho: {
            t: string,
            a: string
        },
        brazoIzquierdo: {
            t: string,
            a: string
        }
        /* brazoDerecho: {
            sistole: string,
            diastole: string
        },
        brazoIzquierdo: {
            sistole: string,
            diastole: string
        } */
    },
    tabaquismo: {
        fuma: boolean,
        cantidad: number,
        fumaEmbarazo: boolean
    },
    antecedentesPatologicos: {
        diabetesMellitus: boolean,
        hipertension: boolean,
        lupusEritematoso: boolean,
        anticuerposAntifofolipidos: boolean,
        preeclamsia: boolean,
        madrePreeclamsia: boolean,
        otroAntecedentes: boolean,
        embarazoTratamientoReproduccion: boolean,
        inductoresOvulacion: boolean
    },
    fertilizacionInvitro: {
        fechaExtraccion: string,
        fechaCongelacion: string,
    },
    donanteOvocitos: {
        fechaNacimiento: string,
        edadAproximada: number
    }
}