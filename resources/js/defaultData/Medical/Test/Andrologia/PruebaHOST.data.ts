import { PruebaHOST } from "@interface/Medical/Test/Andrologia/PruebaHOST.interface"

export const PruebaHOSTData: PruebaHOST = {
    observaciones: {
        fumador: {
            check: false,
            description: ''
        },
        medicamentos: {
            check: false,
            description: ''
        },
        diasAbstinencia: 0,
        modoRecoleccion: '',
        horaRecoleccion: '',
        horaProcesado: ''
    },
    analisisMicroscopico: {
        coaguloInicial: false,
        licuefaccion: '',
        viscosidad: '',
        aspecto: '',
        volumen: '',
        ph: '',
        host: ''
    },
    observacionesAdicionales: ''
}