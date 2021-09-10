export interface IndicadoresBioquimicos
{
    ultimoEstudios: string,
    datosBioquimicos: string,
    analisis: {
        check: boolean,
        description: string
    },
    glucosaCapilar: {
        glucosa1: {
            dia: string,
            glucosa: string
        },
        glucosa2: {
            dia: string,
            glucosa: string
        }
        glucosa3: {
            dia: string,
            glucosa: string
        },
        glucosa4: {
            dia: string,
            glucosa: string
        }
    }
}