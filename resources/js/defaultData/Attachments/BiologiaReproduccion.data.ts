import { BiologiaReproduccion } from "@/resources/js/interfaces/Attachtments/BiologiaReproduccion.interface";

export const BiologiaReproduccionData: BiologiaReproduccion = {
    biologiaReproduccion: {
        tiempoBusquedaEmbarazo: '',
        frecuenciaCoital: '',
        penetracion: '',
        dispareunia: false,
        eyaculacionVaginal: false,
        dismenorrea: false
    },
    factorMasculino: {
        edad: 0,
        paternidadComrpobada: false,
        ocupacion: '',
        traumatismo: '',
        antecedentesParotiditis: '',
        ebd: ''
    },
    factorTuboperitoneal: {
        cirugiasAbdominales: '',
        infeccionesVaginales: ''
    },
    factorEndocrino: {
        ciclos: '',
        cantidad: ''
    },
    factorCervical: {
        infeccionVaginal: false,
        ultimoPapanicolau: '',
        anterioresLesiones: '',
        anterioresCirugias: ''
    },
    notas: ''
}