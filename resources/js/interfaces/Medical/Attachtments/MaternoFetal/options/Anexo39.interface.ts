export interface Anexo39 {
    origenEtnico: {
        etnia: string,
        otra: string
    },
    fum: {
        fum: string,
        consideraMenstruacion: string
    },
    existeAntecedenteComosomopatia: {
        check: boolean,
        trisomia21: string,
        trisomia18: string,
        trisomia13: string
    },
    existeAntecedenteMalformacion: {
        check: boolean,
        description: string
    },
    total: {
        embarazos: number,
        partos: number,
        cesareas: number,
        abortos: number,
        ectopicos: number,
        molas: number
    },
    muerteUtero: {
        muerteAntes: boolean,
        muerteDespues: {
            check: boolean,
            description: number
        }
    },
    gesta1: {
        procedimiento: string,
        vivo: boolean,
        fecha: string,
        semanas: string,
        peso: number,
        sexo: string,
        opcion: {
            tipo: string,
            defecto: string
        },
    },
    gesta2: {
        procedimiento: string,
        vivo: boolean,
        fecha: string,
        semanas: string,
        peso: number,
        sexo: string,
        opcion: {
            tipo: string,
            defecto: string
        },
    },
    gesta3: {
        procedimiento: string,
        vivo: boolean,
        fecha: string,
        semanas: string,
        peso: number,
        sexo: string,
        opcion: {
            tipo: string,
            defecto: string
        },
    },
    gesta4: {
        procedimiento: string,
        vivo: boolean,
        fecha: string,
        semanas: string,
        peso: number,
        sexo: string,
        opcion: {
            tipo: string,
            defecto: string
        },
    },
    gesta5: {
        procedimiento: string,
        vivo: boolean,
        fecha: string,
        semanas: string,
        peso: number,
        sexo: string,
        opcion: {
            tipo: string,
            defecto: string
        },
    }
}