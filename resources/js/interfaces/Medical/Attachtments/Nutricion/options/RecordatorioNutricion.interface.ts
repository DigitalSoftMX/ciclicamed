export interface RecordatorioNutricion
{
    entreSemana: {
        desayuno: {
            desayuno: string,
            colacion: string
        },
        comida: {
            comida: string,
            colacion: string
        },
        cena: string
    },
    finSemana: {
        desayuno: {
            desayuno: string,
            colacion: string
        },
        comida: {
            comida: string,
            colacion: string
        },
        cena: string
    },
    alimentosOlvidados: {
        chicles: boolean,
        mentas: boolean,
        patillas: boolean,
        mermeladas: boolean,
        miel: boolean,
        azucar: boolean,
        sustituto: boolean,
        crema: boolean,
        dulces: boolean,
        mantequilla: boolean,
        aceite: boolean,
        mayonesa: boolean,
        aderezo: boolean,
        vinagretas: boolean,
        sal: boolean,
        salsas: boolean
    }
}