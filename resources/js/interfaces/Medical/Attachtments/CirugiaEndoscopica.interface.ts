export interface CirugiaEndoscopica {
    cervix: {
        penetracion: string,
        oce: string,
        canalEndocervical: string,
        epitelioGlandular: string,
        oci: string
    },
    utero: {
        posicion: string
    },
    cavidadUterina: {
        distension: string,
        defectos: string,
        tamanio: string,
        forma: string
    },
    endometrio: {
        atrofico: boolean,
        proliferativo: string,
        secretor: string,
        anormal: string
    },
    ostium: {
        derechoVisible: {
            checked: boolean,
            description: string
        },
        derechoPermeable: {
            checked: boolean,
            description: string
        },
        izquierdoVisible: {
            checked: boolean,
            description: string
        },
        izquierdoPermeable: {
            checked: boolean,
            description: string
        },
        tomaBiopsia: string,
        colocacionDiu: string,
        resultadoBiopsia: string,
        planQuirurgico: string
    },
    notas: string
}