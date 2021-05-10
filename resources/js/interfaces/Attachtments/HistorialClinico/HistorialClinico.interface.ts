import { HeredoFamiliares } from "./options/HeredoFamiliares.interface";

export interface HistorialClinico
{
    heredoFamiliares: HeredoFamiliares,
    personalesNoPatologicos: {
        tipoSangre: {
            description: string
        },
        ejercicio: {
            description: string
        },
        tabaquismo: {
            description: string
        },
        alcoholismo: {
            description: string
        },
        drogas: {
            description: string
        },
        estrenimiento: {
            description: string
        }
    },
    personalesPatologicos: {
        cirugias: {
            check: boolean,
            description: string
        },
        transfusionales: {
            check: boolean,
            description: string
        },
        infecciosas: {
            check: boolean,
            description: string
        },
        cronicoDegenerativas: {
            check: boolean,
            description: string
        },
        traumatismos: {
            check: boolean,
            description: string
        },
        ginecologicos: {
            check: boolean,
            description: string
        }
    },
    ginecoObstetros: {
        menarca: string,
        ritmo: string,
        cantidad: string,
        toallas: string,
        dolor: string,
        tratamiento: string,
        fum: string,
        ivsa: string,
        parejas: string,
        mpf: string,
        gestas: string,
        cesareas: string,
        partos: string,
        abortos: string,
        ectopicos: string,
        citologiaVertical: string,
        docma: string,
        autoexploracion: string,
        usg: string,
        mastografia: string,
        menopausia: string,
        antecedentesInfertilidad: string,
        g1: {
            anio: number,
            edad: number,
            duracion: string,
            sexo: string,
            peso: string,
            vivoSano: boolean,
            resol: string,
            comp: string,
            lactancia: string
        },
        g2: {
            anio: number,
            edad: number,
            duracion: string,
            sexo: string,
            peso: string,
            vivoSano: boolean,
            resol: string,
            comp: string,
            lactancia: string
        },
        g3: {
            anio: number,
            edad: number,
            duracion: string,
            sexo: string,
            peso: string,
            vivoSano: boolean,
            resol: string,
            comp: string,
            lactancia: string
        },
        g4: {
            anio: number,
            edad: number,
            duracion: string,
            sexo: string,
            peso: string,
            vivoSano: boolean,
            resol: string,
            comp: string,
            lactancia: string
        }
    },
    tratamientos: {
        padecimientoActual: string,
        exploracionFisica: string,
        gabineteLaboratoria: string,
        impresionDiagnostica: string,
        tratamiento: string,
        planMedica: string,
        pronostico: string,
        funcion: string
    }
}