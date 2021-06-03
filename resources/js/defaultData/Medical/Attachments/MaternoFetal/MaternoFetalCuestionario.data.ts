import { MaternoFetalCuestionario } from "@interface/Medical/Attachtments/MaternoFetal/options/MaternoFetalCuestionario.interface";

export const MaternoFetalCuestionarioData: MaternoFetalCuestionario = {
    origenEtnico: {
        etnia: '',
        otra: ''
    },
    fum: {
        fum: '',
        consideraMenstruacion: ''
    },
    existeAntecedenteComosomopatia: {
        check: false,
        trisomia21: '',
        trisomia18: '',
        trisomia13: ''
    },
    existeAntecedenteMalformacion: {
        check: false,
        description: ''
    },
    total: {
        embarazos: 0,
        partos: 0,
        cesareas: 0,
        abortos: 0,
        ectopicos: 0,
        molas: 0
    },
    muerteUtero: {
        muerteAntes: false,
        muerteDespues: {
            check: false,
            description: 0
        }
    },
    enfermera: {
        peso: '',
        talla: '',
        brazoDerecho: {
            sistole: '',
            diastole: ''
        },
        brazoIzquierdo: {
            sistole: '',
            diastole: ''
        }
    },
    tabaquismo: {
        fuma: false,
        cantidad: 0,
        fumaEmbarazo: false
    },
    antecedentesPatologicos: {
        diabetesMellitus: false,
        hipertension: false,
        lupusEritematoso: false,
        anticuerposAntifofolipidos: false,
        preeclamsia: false,
        madrePreeclamsia: false,
        otroAntecedentes: false,
        embarazoTratamientoReproduccion: false,
        inductoresOvulacion: false
    },
    fertilizacionInvitro: {
        fechaExtraccion: '',
        fechaCongelacion: '',
    },
    donanteOvocitos: {
        fechaNacimiento: '',
        edadAproximada: 0
    }
}