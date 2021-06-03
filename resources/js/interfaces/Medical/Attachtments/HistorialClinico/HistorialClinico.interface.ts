import { GinecoObstetros } from "./options/GinecoObstetros.interface";
import { HeredoFamiliares } from "./options/HeredoFamiliares.interface";
import { PersonalesNoPatologicos } from "./options/PersonalesNoPatologicos.interface";
import { PersonalesPatologicos } from "./options/PersonalesPatologicos.interface";
import { Tratamientos } from "./options/Tratamientos.interface";

export interface HistorialClinico
{
    heredoFamiliares: HeredoFamiliares,
    personalesNoPatologicos: PersonalesNoPatologicos,
    personalesPatologicos: PersonalesPatologicos
    ginecoObstetros: GinecoObstetros,
    tratamientos: Tratamientos
}