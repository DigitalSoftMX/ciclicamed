import { HistorialClinico } from "@/resources/js/interfaces/Attachtments/HistorialClinico/HistorialClinico.interface";
import { GinecoObstetrosData } from "./options/GinecoObstetros.data";
import { HeredoFamiliaresData } from "./options/HeredoFamiliares.data";
import { PersonalesNoPatologicosData } from "./options/PersonalesNoPatologicos.data";
import { PersonalesPatologicosData } from "./options/PersonalesPatologicos.data";
import { TratamientosData } from "./options/Tratamientos.data";

export const HistorialClinicoData: HistorialClinico = {
    heredoFamiliares: HeredoFamiliaresData,
    personalesNoPatologicos: PersonalesNoPatologicosData,
    personalesPatologicos: PersonalesPatologicosData,
    ginecoObstetros: GinecoObstetrosData,
    tratamientos: TratamientosData
}