import { HeredoFamiliares } from "@/resources/js/interfaces/Attachtments/HistorialClinico/options/HeredoFamiliares.interface";

export const HeredoFamiliaresData: HeredoFamiliares = {
    hipertension: {
        check: false,
        description: ''
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
        description: ''
    },
    patologiaTiroidea: {
        check: false,
        description: ''
    },
    otros: {
        check: false,
        description: ''
    }
}