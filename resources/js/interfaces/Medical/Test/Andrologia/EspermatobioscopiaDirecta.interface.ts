export interface EspermatobioscopiaDirecta
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
    analisisMacroscopico: {
        coaguloInicial: boolean,
        licuefaccion: string,
        viscosidad: string,
        aspecto: string,
        volumen: string,
        ph: string
    },
    analisisMicroscopico: {
        concentracion: string,
        concentracionTotal: string,
        movilidad: {
            a: number,
            b: number,
            c: number,
            d: number
        },
        morfologia: number,
        defectosCabeza: number,
        defectosPiezaMedia: number,
        defectosCola: number
    },
    celularidad: {
        eritrocitos: number,
        leucocitos: number,
        inmaduras: number,
        epiteliales: number,
        bacterias: string,
        cristales: string,
        aglutinacion: string,
        residuos: string
    },
    movilidadDisminuida: {
        viabilidad: number,
        observaciones: string
    }
}