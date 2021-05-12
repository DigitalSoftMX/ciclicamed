import { CirugiaEndoscopica } from "@/resources/js/interfaces/Attachtments/CirugiaEndoscopica.interface";

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
        derecho: {
            checked: false,
            description: ''
        },
        izquierdo: {
            checked: false,
            description: ''
        },
        visible: '',
        tomaBiopsia: '',
        colocacionDiu: '',
        resultadoBiopsia: '',
        planQuirurgico: ''
    },
    notas: ''
}