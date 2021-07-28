import { Estimulacion } from "./Estimulacion.inteface";

export interface BiologiaReproduccion
{
    biologiaReproduccion: {
        tiempoBusquedaEmbarazo: string,
        frecuenciaCoital: string,
        penetracion: string,
        dispareunia: boolean,
        eyaculacionVaginal: boolean,
        dismenorrea: boolean
    },
    factorMasculino: {
        edad: number,
        paternidadComrpobada: boolean,
        ocupacion: string,
        traumatismo: string,
        antecedentesParotiditis: string,
        ebd: string
    },
    factorTuboperitoneal: {
        cirugiasAbdominales: string,
        infeccionesVaginales: string
    },
    factorEndocrino: {
        ciclos: string,
        cantidad: string
    },
    factorCervical: {
        infeccionVaginal: boolean,
        ultimoPapanicolau: string,
        anterioresLesiones: string,
        anterioresCirugias: string
    },
    notas: string,
    estimulacion: {
        inseminacionesPrevias: string;
        gnrh: string;
        diaInicio: string;
        dosis: string;
        hasta: string;
        sosten: string,
        dosis2: string,
        fechaInicio2: string,
        bhcg: string,
        resultados: string,
        observaciones: string,
        estimulacion: {
            estimulacion1: Estimulacion,
            estimulacion2: Estimulacion,
            estimulacion3: Estimulacion,
            estimulacion4: Estimulacion,
            estimulacion5: Estimulacion,
            estimulacion6: Estimulacion,
            estimulacion7: Estimulacion,
            estimulacion8: Estimulacion,
            estimulacion9: Estimulacion,
            estimulacion10: Estimulacion,
            estimulacion11: Estimulacion,
            estimulacion12: Estimulacion,
            estimulacion13: Estimulacion,
            estimulacion14: Estimulacion,
            estimulacion15: Estimulacion,
        }
    }
}