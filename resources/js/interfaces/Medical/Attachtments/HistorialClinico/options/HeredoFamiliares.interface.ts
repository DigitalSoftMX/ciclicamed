export interface HeredoFamiliares {
    hipertension: {
        check: boolean,
        description: string
    },
    cancer: {
        check: boolean,
        ginecologico: {
            check: boolean,
            description: string,
            otro: string,
            age: number
        },
        otros: {
            check: boolean,
            description: string,
            otro: string,
            age: number
        }
    },
    diabetesMellitus: {
        check: boolean,
        description: string
    },
    patologiaTiroidea: {
        check: boolean,
        description: string
    },
    otros: {
        check: boolean,
        description: string
    }
}