export interface MaternoFetalResultados
{
    numeroFetos: number,
    multipleCorionicidad: string,
    feto1: {
        localizacion: string,
        lcc: number,
        semanas: number,
        fcf: number,
        translucenciaNucal: string,
        ipDuctoVenoso: boolean,
        ondaA: string,
        huesoNasal: boolean,
        regurgitacionTricuspidea: boolean,
        defectosMayores: string,
        placenta: string,
        calculoFactorRiesgo: {
            trisonomia21: {
                riesgoBasal: number,
                usg: number,
                duoTest: number
            },
            trisonomia18: {
                riesgoBasal: number,
                usg: number,
                duoTest: number
            },
            trisonomia13: {
                riesgoBasal: number,
                usg: number,
                duoTest: number
            }
        }
    },
    feto2: {
        localizacion: string,
        lcc: number,
        semanas: number,
        fcf: number,
        translucenciaNucal: string,
        ipDuctoVenoso: boolean,
        ondaA: string,
        huesoNasal: boolean,
        regurgitacionTricuspidea: boolean,
        defectosMayores: string,
        placenta: string,
        calculoFactorRiesgo: {
            trisonomia21: {
                riesgoBasal: number,
                usg: number,
                duoTest: number
            },
            trisonomia18: {
                riesgoBasal: number,
                usg: number,
                duoTest: number
            },
            trisonomia13: {
                riesgoBasal: number,
                usg: number,
                duoTest: number
            }
        }
    },
    feto3: {
        localizacion: string,
        lcc: number,
        semanas: number,
        fcf: number,
        translucenciaNucal: string,
        ipDuctoVenoso: boolean,
        ondaA: string,
        huesoNasal: boolean,
        regurgitacionTricuspidea: boolean,
        defectosMayores: string,
        placenta: string,
        calculoFactorRiesgo: {
            trisonomia21: {
                riesgoBasal: number,
                usg: number,
                duoTest: number
            },
            trisonomia18: {
                riesgoBasal: number,
                usg: number,
                duoTest: number
            },
            trisonomia13: {
                riesgoBasal: number,
                usg: number,
                duoTest: number
            }
        }
    },
    dopplerArteriasUterinas: {
        ipArteriaDerecha: {
            description: string,
            notch: boolean
        },
        ipArteriaIzquierda: {
            description: string,
            notch: boolean
        },
        ipMedioArterias: string
    },
    longitudCervical: string,
    marcadoresSericos: {
        fechaToma: string,
        fechaProcesamiento: string,
        bhgc: {
            bhgc: string,
            mom: string
        },
        pappa: {
            pappa: string,
            mom: string
        },
        pigf: {
            pigf: string,
            mom: string
        },
    },
    calculoRiesgo: {
        preclamsia: string,
        restriccionCrecimiento: string,
        partoPretermino: string
    }
}