import { HeredoFamiliares } from "@interface/Medical/Attachtments/HistorialClinico/options/HeredoFamiliares.interface";

export const HeredoFamiliaresData: HeredoFamiliares = {
    hipertension: {
        check: false,
        description: 'Familiar'
    },
    cancer: {
        check: false,
        ginecologico: {
            age: 0,
            description: ''
        },
        otros: {
            age: 0,
            description: ''
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