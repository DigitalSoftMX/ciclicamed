import { Colposcopia } from "@interface/Medical/Attachtments/Colposcopia.interface";

export const ColposcopiaData: Colposcopia = {
    antecedentesImportancia: {
        antecedentesObstetricos: '',
        frecuenciaCoital: '',
        usoHormonales: '',
        citologiaVerticalPrevia: ''
    },
    cervix: {
        volumen: '',
        zonaTransformacion: '',
        estudioColposcopia: '',
        evasionGlandular: '',
        atrofiaEpitelial: '',
        quistesNaboth: '',
        tumoracion: ''
    },
    aplicacionAcidoAcetico: {
        epitelioAcetoblanco: '',
        borde: '',
        mosaico: '',
        superficie: '',
        testSchiller: ''
    },
    vaginoscopia: {
        leucorrea: {
            check: false,
            description: ''
        },
        epitelioAcetoblanco: '',
        captacionLugol: ''
    },
    vulvoscopia: '',
    diagnosticoColposcopico: ''
}