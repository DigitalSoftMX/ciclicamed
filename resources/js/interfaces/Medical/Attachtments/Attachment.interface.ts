import { BiologiaReproduccion } from "./BiologiaReproduccion.interface";
import { CirugiaEndoscopica } from "./CirugiaEndoscopica.interface";
import { ClimaterioSaludOsea } from "./ClimaterioSaludOsea.interface";
import { Colposcopia } from "./Colposcopia.interface";
import { MaternoFetal } from "./MaternoFetal/MaternoFetal.interface";
import { NutricionGeneral } from "./Nutricion/NutricionGeneral.interface";
import { NutricionPerinatal } from "./Nutricion/NutricionPerinatal.interface";
import { Oncologia } from "./Oncologia.interface";
import { Uroginecologia } from "./Uroginecologia.interface";

export interface Attachtment
{
    medicalconsult_id: number;
    medicalspecialty_id: number;
    data: {
        type: string,
        form: Uroginecologia |
        ClimaterioSaludOsea |
        MaternoFetal |
        NutricionPerinatal |
        NutricionGeneral |
        BiologiaReproduccion |
        CirugiaEndoscopica |
        Oncologia |
        Colposcopia,
    };
    update_by?: number;
    update_note?: string;
}