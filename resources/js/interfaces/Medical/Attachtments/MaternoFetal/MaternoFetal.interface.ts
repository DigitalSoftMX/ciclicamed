import { MaternoFetalCuestionario } from "./options/MaternoFetalCuestionario.interface";
import { MaternoFetalResultados } from "./options/MaternoFetalResultados.interface";
import { Anexo39 } from "./options/Anexo39.interface";

export interface MaternoFetal {
    cuestionario: MaternoFetalCuestionario,
    resultados: MaternoFetalResultados,
    anexo39: Anexo39
}