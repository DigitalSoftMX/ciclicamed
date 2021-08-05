import { BiologiaReproduccion } from "@interface/Medical/Attachtments/BiologiaReproduccion.interface";
import { EstimulacionData } from "./Estimulacion.data";
import cloneDeep from "lodash/cloneDeep"

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
            estimulacion1: cloneDeep(EstimulacionData),
            estimulacion2: cloneDeep(EstimulacionData),
            estimulacion3: cloneDeep(EstimulacionData),
            estimulacion4: cloneDeep(EstimulacionData),
            estimulacion5: cloneDeep(EstimulacionData),
            estimulacion6: cloneDeep(EstimulacionData),
            estimulacion7: cloneDeep(EstimulacionData),
            estimulacion8: cloneDeep(EstimulacionData),
            estimulacion9: cloneDeep(EstimulacionData),
            estimulacion10: cloneDeep(EstimulacionData),
            estimulacion11: cloneDeep(EstimulacionData),
            estimulacion12: cloneDeep(EstimulacionData),
            estimulacion13: cloneDeep(EstimulacionData),
            estimulacion14: cloneDeep(EstimulacionData),
            estimulacion15: cloneDeep(EstimulacionData),
        }
    }
}