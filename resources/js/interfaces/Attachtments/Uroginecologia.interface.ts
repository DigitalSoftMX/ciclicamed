export interface Uroginecologia
{
    nictamero: string,
    consumoLitros: string,
    incontinenciaUrinariaUrgencia: {
        check: boolean,
        tiempoEvolucion: string,
        frecuencia: string,
        cantidadPerdida: string
    },
    incontinenciaUrinariaEsfuerzo: {
        check: boolean,
        tiempoEvolucion: string,
        frecuencia: string,
        cantidadPerdida: string
    },
    chorroMiccional: string,
    sensacionVacionamiento: string,
    interrogatorio: {
        disuria: boolean,
        hematuria: boolean,
        sensacionCuerpoExtranio: boolean,
        resequedadVaginal: boolean,
        ardor: boolean,
        prurito: boolean,
        estrenimiento: boolean,
        consumoLaxantes: boolean,
        incontinenciaFlatos: boolean,
        vidaSexual: boolean,
        incontinenciaPenetracion: boolean,
        evacuacionesDia: number,
        dispareunia: boolean
    },
    exploracionFisica: {
        reflejosPerineales: string,
        pruebaTos: string,
        atrofiaVaginal: string,
        notas: string
    }
}