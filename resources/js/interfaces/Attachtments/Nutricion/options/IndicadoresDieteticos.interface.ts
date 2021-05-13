export interface IndicadoresDieteticos
{
    comidas: number,
    preparaAlimentos: string,
    comeEntreComidas: {
        check: boolean,
        description: string
    },
    modificadoAlimentacion: {
        check: boolean,
        porQue: string,
        como: string
    },
    apetito: string,
    horaHambre: string,
    alimentosPreferidos: string,
    alimentosNoAgradan: string,
    alimentosMalestar: string,
    alergico: {
        check: boolean,
        description: string
    },
    tomaSuplemento: {
        check: boolean,
        suplementos: {
            suplemento1: {
                cual: string,
                dosis: string
            },
            suplemento2: {
                cual: string,
                dosis: string
            },
            suplemento3: {
                cual: string,
                dosis: string
            }
        }
    },
    consumoVariaTriste: {
        check: boolean,
        description: string
    },
    agregaSal: boolean,
    grasaUtiliza: string,
    dietaEspecial: {
        check: boolean,
        dietas: string,
        cuantas: string,
        tipo: string,
        haceCuanto: string,
        porCuanto: string,
        porQue: string,
        tantoApego: string,
        obtuvoResultados: string,
        kgPerdidos: string,
        pesoLogrado: string
    },
    medicamentosBajar: {
        check: boolean,
        cuales: string,
        cuantoTiempo: string
    },
    plan: string
}