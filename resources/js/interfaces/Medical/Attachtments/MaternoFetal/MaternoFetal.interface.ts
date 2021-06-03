import { MaternoFetalCuestionario } from "./options/MaternoFetalCuestionario.interface";
import { MaternoFetalResultados } from "./options/MaternoFetalResultados.interface";

export interface MaternoFetal
{
    cuestionario: MaternoFetalCuestionario,
    resultados: MaternoFetalResultados
}