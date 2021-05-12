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
    notas: string
}