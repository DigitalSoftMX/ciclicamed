import { IndicadoresDieteticos } from "@interface/Medical/Attachtments/Nutricion/options/IndicadoresDieteticos.interface"

export const IndicadoresDieteticosData: IndicadoresDieteticos = {
    comidas: 0,
    preparaAlimentos: '',
    comeEntreComidas: {
        check: false,
        description: ''
    },
    modificadoAlimentacion: {
        check: false,
        porQue: '',
        como: ''
    },
    apetito: '',
    horaHambre: '',
    alimentosPreferidos: '',
    alimentosNoAgradan: '',
    alimentosMalestar: '',
    alergico: {
        check: false,
        description: ''
    },
    tomaSuplemento: {
        check: false,
        suplementos: {
            suplemento1: {
                cual: '',
                dosis: ''
            },
            suplemento2: {
                cual: '',
                dosis: ''
            },
            suplemento3: {
                cual: '',
                dosis: ''
            }
        }
    },
    consumoVariaTriste: {
        check: false,
        description: ''
    },
    agregaSal: false,
    grasaUtiliza: '',
    dietaEspecial: {
        check: false,
        dietas: '',
        cuantas: '',
        tipo: '',
        haceCuanto: '',
        porCuanto: '',
        porQue: '',
        tantoApego: '',
        obtuvoResultados: '',
        kgPerdidos: '',
        pesoLogrado: ''
    },
    medicamentosBajar: {
        check: false,
        cuales: '',
        cuantoTiempo: ''
    },
    plan: ''
}