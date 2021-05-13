export interface AntecedentesSalud
{
    problemasActuales: {
        diarrea: boolean,
        estrenimiento: boolean,
        gastitris: boolean,
        ulcera: boolean,
        nauseas: boolean,
        pirosis: boolean,
        vomito: boolean,
        colitis: boolean,
        otros: {
            check: boolean,
            description: string
        }
    },
    cantidadPerdida: string,
    ta: {
        brazoDerecho: string,
        brazoIzquierdo: string
    },
    padeceEnfermedadDiagnosticada: string,
    padecioEnfermedadImportante: string,
    complicacionesAnteriores: string,
    tomaMedicamento: {
        check: boolean,
        medicamento1: {
            cual: string,
            dosis: string,
            cuando: string
        },
        medicamento2: {
            cual: string,
            dosis: string,
            cuando: string
        },
        medicamento3: {
            cual: string,
            dosis: string,
            cuando: string
        }
    },
    toma: {
        laxantes: boolean,
        diureticos: boolean,
        antiacidos: boolean,
        analgesicos: boolean
    },
    cirugiaAnterior: string
}