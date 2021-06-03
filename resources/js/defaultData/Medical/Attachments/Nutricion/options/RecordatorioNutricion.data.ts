import { RecordatorioNutricion } from "@interface/Medical/Attachtments/Nutricion/options/RecordatorioNutricion.interface";

export const RecordatorioNutricionData: RecordatorioNutricion = {
    entreSemana: {
        desayuno: {
            desayuno: '',
            colacion: ''
        },
        comida: {
            comida: '',
            colacion: ''
        },
        cena: ''
    },
    finSemana: {
        desayuno: {
            desayuno: '',
            colacion: ''
        },
        comida: {
            comida: '',
            colacion: ''
        },
        cena: ''
    },
    alimentosOlvidados: {
        chicles: false,
        mentas: false,
        patillas: false,
        mermeladas: false,
        miel: false,
        azucar: false,
        sustituto: false,
        crema: false,
        dulces: false,
        mantequilla: false,
        aceite: false,
        mayonesa: false,
        aderezo: false,
        vinagretas: false,
        sal: false,
        salsas: false
    }
}