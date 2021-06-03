export interface ClimaterioSaludOsea
{
    ciclosMenstruales: string,
    cantidadSangrado: string,
    toallas: string,
    dilgenorrea: {
        check: boolean,
        description: string
    },
    bochornos: {
        check: boolean,
        description: string
    },
    caidaCabello: boolean,
    resequedadPiel: boolean,
    labilidad: boolean,
    irritabilidad: boolean,
    ansiedad: boolean,
    nerviosismo: boolean,
    cefalea: boolean,
    insomnio: boolean,
    alteracionLibido: boolean,
    resequedadVaginal: boolean,
    sudoracion: {
        check: boolean,
        description: string
    },
    incontinenciaUrinaria: {
        check: boolean,
        description: string
    },
    notas: string
}