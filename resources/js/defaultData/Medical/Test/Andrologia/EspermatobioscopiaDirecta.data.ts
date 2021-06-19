import { EspermatobioscopiaDirecta } from "@interface/Medical/Test/Andrologia/EspermatobioscopiaDirecta.interface"

export const EspermatobioscopiaDirectaData: EspermatobioscopiaDirecta = {
    observaciones: {
        fumador: {
            check: false,
            description: ''
        },
        medicamentos: {
            check: false,
            description: ''
        },
        diasAbstinenciaSexual: 0,
        modoRecoleccion: '',
        horaRecoleccion: '',
        horaProcesado: ''
    },
    analisisMacroscopico: {
        coaguloInicial: false,
        licuefaccion: '',
        viscosidad: '',
        aspecto: '',
        volumen: '',
        ph: ''
    },
    analisisMicroscopico: {
        concentracion: '',
        concentracionTotal: '',
        movilidad: {
            a: 0,
            b: 0,
            c: 0,
            d: 0
        },
        morfologia: 0,
        defectosCabeza: 0,
        defectosPiezaMedia: 0,
        defectosCola: 0
    },
    celularidad: {
        eritrocitos: 0,
        leucocitos: 0,
        inmaduras: 0,
        epiteliales: 0,
        bacterias: '',
        cristales: '',
        aglutinacion: '',
        residuos: ''
    },
    movilidadDisminuida: {
        viabilidad: 0,
        observaciones: ''
    }
}