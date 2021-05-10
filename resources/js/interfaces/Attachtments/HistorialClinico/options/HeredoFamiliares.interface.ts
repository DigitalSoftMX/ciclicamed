export interface HeredoFamiliares
{
    hipertension: {
        check: boolean,
        description: string
    },
    cancer: {
        check: boolean,
        ginecologico: {
            description: string,
            age: number
        },
        otros: {
            description: string,
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