export interface InseminacionArtificial
{
    observaciones: {
        fumador: {
            check: boolean,
            description: string
        },
        medicamentos: {
            check: boolean,
            description: string
        },
        diasAbstinenciaSexual: number,
        modoRecoleccion: string,
        horaRecoleccion: string,
        horaProcesado: string
    },
    analisisPreCapacitacion: {
        licuefaccion: number,
        viscosidad: number,
        aspecto: string,
        volumen: number,
        concentracion: number,
        concentracionTotal: number,
        movilidad: {
            a: number,
            b: number,
            c: number,
            d: number
        },
        morfologia: number,
        observaciones: string
    },
    analisisPostCapacitacion: {
        volumenFinal: number,
        concentracion: number,
        movilidad: {
            a: number,
            b: number,
            c: number,
            d: number
        },
        morfologia: number,
        observaciones: string
    }
}