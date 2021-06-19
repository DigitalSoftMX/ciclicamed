export interface OrinaPostEyaculado
{
    observaciones: {
        medicamentos: {
            check: boolean,
            description: string
        },
        diasAbstinenciaSexual: number,
        horaRecoleccion: string,
        horaProcesado: string
    },
    analisisMacroscopico: {
        ph: string,
        aspecto: string
    },
    analisisMicroscopico: {
        concentracion: number,
        movilidad: {
            a: number,
            b: number,
            c: number,
            d: number
        },
        eritrocitos: string,
        leucocitos: string,
        inmaduras: string,
        epiteliales: string,
        bacterias: string,
        cristales: string,
        residuos: string
    },
    observacionesAdicionales: string
}