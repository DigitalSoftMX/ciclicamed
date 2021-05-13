export interface ConsumoFrecuencia
{
    alcohol: {
        check: boolean,
        cantidad: string,
        frecuencia: string
    },
    tabaco: {
        check: boolean,
        cantidad: string,
        frecuencia: string
    },
    cafe: {
        check: boolean,
        cantidad: string,
        frecuencia: string
    }
}