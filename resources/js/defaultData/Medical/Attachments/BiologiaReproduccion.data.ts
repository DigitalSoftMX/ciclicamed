import { BiologiaReproduccion } from "@interface/Medical/Attachtments/BiologiaReproduccion.interface";
import { EstimulacionData } from "./Estimulacion.data";

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
    notas: '',
    estimulacion: {
        inseminacionesPrevias: '',
        gnrh: '',
        diaInicio: '',
        dosis: '',
        hasta: '',
        sosten: '',
        dosis2: '',
        fechaInicio2: '',
        bhcg: '',
        resultados: '',
        observaciones: '',
        estimulacion: {
            estimulacion1: EstimulacionData,
            estimulacion2: EstimulacionData,
            estimulacion3: EstimulacionData,
            estimulacion4: EstimulacionData,
            estimulacion5: EstimulacionData,
            estimulacion6: EstimulacionData,
            estimulacion7: EstimulacionData,
            estimulacion8: EstimulacionData,
            estimulacion9: EstimulacionData,
            estimulacion10: EstimulacionData,
            estimulacion11: EstimulacionData,
            estimulacion12: EstimulacionData,
            estimulacion13: EstimulacionData,
            estimulacion14: EstimulacionData,
            estimulacion15: EstimulacionData,
        }
    }
}