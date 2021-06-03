export interface AspectosGinecologicos
{
    embarazoActual: {
        check: boolean,
        semanasGestacion: string,
        pesoPregestacional: string
    },
    anticonceptivosOrales: {
        check: boolean,
        cual: string,
        dosis: string,
        sx: string
    },
    climaterio: {
        check: boolean,
        description: string
    },
    terapiaReemplazoHormonal: {
        check: boolean,
        cual: string,
        dosis: string,
        sx: string
    }
}