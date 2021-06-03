import { AntecedentesSalud } from "@interface/Medical/Attachtments/Nutricion/options/AntecedentesSalud.interface"

export const AntecedentesSaludData: AntecedentesSalud = {
    problemasActuales: {
        diarrea: false,
        estrenimiento: false,
        gastitris: false,
        ulcera: false,
        nauseas: false,
        pirosis: false,
        vomito: false,
        colitis: false,
        dentadura: false,
        otros: {
            check: false,
            description: ''
        }
    },
    observaciones: '',
    ta: {
        brazoDerecho: '',
        brazoIzquierdo: ''
    },
    padeceEnfermedadDiagnosticada: '',
    padecioEnfermedadImportante: '',
    complicacionesAnteriores: '',
    tomaMedicamento: {
        check: false,
        medicamento1: {
            cual: '',
            dosis: '',
            cuando: ''
        },
        medicamento2: {
            cual: '',
            dosis: '',
            cuando: ''
        },
        medicamento3: {
            cual: '',
            dosis: '',
            cuando: ''
        }
    },
    toma: {
        laxantes: false,
        diureticos: false,
        antiacidos: false,
        analgesicos: false
    },
    cirugiaAnterior: ''
}