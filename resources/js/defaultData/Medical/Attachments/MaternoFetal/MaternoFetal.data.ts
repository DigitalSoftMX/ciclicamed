import { MaternoFetal } from "@interface/Medical/Attachtments/MaternoFetal/MaternoFetal.interface";
import { MaternoFetalCuestionarioData } from "./MaternoFetalCuestionario.data";
import { MaternoFetalResultadosData } from "./MaternoFetalResultados.data";
import { Anexo39Data } from "./Anexo39.data";

export const MaternoFetalData: MaternoFetal = {
    cuestionario: MaternoFetalCuestionarioData,
    resultados: MaternoFetalResultadosData,
    anexo39: Anexo39Data,
}