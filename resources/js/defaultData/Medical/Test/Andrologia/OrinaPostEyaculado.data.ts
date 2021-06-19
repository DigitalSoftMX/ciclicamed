import { OrinaPostEyaculado } from "@interface/Medical/Test/Andrologia/OrinaPostEyaculado.interface"

export const OrinaPostEyaculadoData: OrinaPostEyaculado ={
    observaciones: {
        medicamentos: {
            check: false,
            description: ''
        },
        diasAbstinenciaSexual: 0,
        horaRecoleccion: '',
        horaProcesado: ''
    },
    analisisMacroscopico: {
        ph: '',
        aspecto: ''
    },
    analisisMicroscopico: {
        concentracion: 0,
        movilidad: {
            a: 0,
            b: 0,
            c: 0,
            d: 0
        },
        eritrocitos: '',
        leucocitos: '',
        inmaduras: '',
        epiteliales: '',
        bacterias: '',
        cristales: '',
        residuos: ''
    },
    observacionesAdicionales: ''
}