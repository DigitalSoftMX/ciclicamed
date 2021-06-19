import { InseminacionArtificial } from "@interface/Medical/Test/Andrologia/InseminacionArtificial.interface"

export const InseminacionArtificialData: InseminacionArtificial ={
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
    analisisPreCapacitacion: {
        licuefaccion: 0,
        viscosidad: 0,
        aspecto: '',
        volumen: 0,
        concentracion: 0,
        concentracionTotal: 0,
        movilidad: {
            a: 0,
            b: 0,
            c: 0,
            d: 0
        },
        morfologia: 0,
        observaciones: ''
    },
    analisisPostCapacitacion: {
        volumenFinal: 0,
        concentracion: 0,
        movilidad: {
            a: 0,
            b: 0,
            c: 0,
            d: 0
        },
        morfologia: 0,
        observaciones: ''
    }
}