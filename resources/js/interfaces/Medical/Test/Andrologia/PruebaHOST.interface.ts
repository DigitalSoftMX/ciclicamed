export interface PruebaHOST
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
        diasAbstinencia: number,
        modoRecoleccion: string,
        horaRecoleccion: string,
        horaProcesado: string
    },
    analisisMicroscopico: {
        coaguloInicial: boolean,
        licuefaccion: string,
        viscosidad: string,
        aspecto: string,
        volumen: string,
        ph: string,
        host: string
    },
    observacionesAdicionales: string
}