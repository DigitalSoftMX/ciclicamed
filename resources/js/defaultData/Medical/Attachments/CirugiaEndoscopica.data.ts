import { CirugiaEndoscopica } from "@interface/Medical/Attachtments/CirugiaEndoscopica.interface";

export const CirugiaEndoscopicaData: CirugiaEndoscopica = {
    cervix: {
        penetracion: '',
        oce: '',
        canalEndocervical: '',
        epitelioGlandular: '',
        oci: ''
    },
    utero: {
        posicion: ''
    },
    cavidadUterina: {
        distension: '',
        defectos: '',
        tamanio: '',
        forma: ''
    },
    endometrio: {
        atrofico: false,
        proliferativo: '',
        secretor: '',
        anormal: ''
    },
    ostium: {
        derechoVisible: {
            checked: false,
            description: ''
        },
        derechoPermeable: {
            checked: false,
            description: ''
        },
        izquierdoVisible: {
            checked: false,
            description: ''
        },
        izquierdoPermeable: {
            checked: false,
            description: ''
        },
        tomaBiopsia: '',
        colocacionDiu: '',
        resultadoBiopsia: '',
        planQuirurgico: ''
    },
    notas: ''
}