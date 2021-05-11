export interface Tratamientos
{
    padecimientoActual: string,
    exploracionFisica: string,
    gabineteLaboratoria: string,
    impresionDiagnostica: string,
    tratamiento: string,
    planMedico: string,
    pronostico: {
        vida: string,
        funcion: string
    }
}