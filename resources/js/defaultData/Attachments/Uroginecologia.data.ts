import { Uroginecologia } from "../../interfaces/Attachtments/Uroginecologia.interface";

export const UroginecologiaData: Uroginecologia = {
    nictamero: '',
    consumoLitros: '',
    incontinenciaUrinariaUrgencia: {
        check: false,
        tiempoEvolucion: '',
        frecuencia: '',
        cantidadPerdida: ''
    },
    incontinenciaUrinariaEsfuerzo: {
        check: false,
        tiempoEvolucion: '',
        frecuencia: '',
        cantidadPerdida: ''
    },
    chorroMiccional: '',
    sensacionVacionamiento: '',
    interrogatorio: {
        disuria: false,
        hematuria: false,
        sensacionCuerpoExtranio: false,
        resequedadVaginal: false,
        ardor: false,
        prurito: false,
        estrenimiento: false,
        consumoLaxantes: false,
        incontinenciaFlatos: false,
        vidaSexual: false,
        incontinenciaPenetracion: false,
        evacuacionesDia: 0,
        dispareunia: false
    },
    exploracionFisica: {
        reflejosPerineales: '',
        pruebaTos: '',
        atrofiaVaginal: '',
        notas: ''
    }
}