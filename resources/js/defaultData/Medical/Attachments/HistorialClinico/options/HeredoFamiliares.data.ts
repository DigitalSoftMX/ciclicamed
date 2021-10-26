import { HeredoFamiliares } from "@interface/Medical/Attachtments/HistorialClinico/options/HeredoFamiliares.interface";

export const HeredoFamiliaresData: HeredoFamiliares = {
    hipertension: {
        check: false,
        description: 'Familiar'
    },
    cancer: {
        check: false,
        ginecologico: {
            check: false,
            age: 0,
            description: '',
            otro: ''
        },

        otros: {
            check: false,
            age: 0,
            description: '',
            otro: ''
        },
    },
    diabetesMellitus: {
        check: false,
        description: 'Familiar'
    },
    patologiaTiroidea: {
        check: false,
        description: 'Familiar'
    },
    otros: {
        check: false,
        description: ''
    }
}