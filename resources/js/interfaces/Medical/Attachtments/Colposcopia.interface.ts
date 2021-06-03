export interface Colposcopia
{
    antecedentesImportancia: {
        antecedentesObstetricos: string,
        frecuenciaCoital: string,
        usoHormonales: string,
        citologiaVerticalPrevia: string
    },
    cervix: {
        volumen: string,
        zonaTransformacion: string,
        estudioColposcopia: string,
        evasionGlandular: string,
        atrofiaEpitelial: string,
        quistesNaboth: string,
        tumoracion: string
    },
    aplicacionAcidoAcetico: {
        epitelioAcetoblanco: string,
        borde: string,
        mosaico: string,
        superficie: string,
        testSchiller: string
    },
    vaginoscopia: {
        leucorrea: {
            check: boolean,
            description: string
        },
        epitelioAcetoblanco: string,
        captacionLugol: string
    },
    vulvoscopia: string,
    diagnosticoColposcopico: string
}