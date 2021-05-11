export interface CirugiaEndoscopica
{
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
        derecho: {
            checked: boolean,
            description: string
        },
        izquierdo: {
            checked: boolean,
            description: string
        },
        visible: string,
        tomaBiopsia: string,
        colocacionDiu: string,
        resultadoBiopsia: string,
        planQuirurgico: string
    },
    notas: string
}