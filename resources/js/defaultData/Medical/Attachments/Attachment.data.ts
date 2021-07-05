import { Attachtment } from "@interface/Medical/Attachtments/Attachment.interface";
import { BiologiaReproduccion } from "@interface/Medical/Attachtments/BiologiaReproduccion.interface";
import { CirugiaEndoscopica } from "@interface/Medical/Attachtments/CirugiaEndoscopica.interface";
import { ClimaterioSaludOsea } from "@interface/Medical/Attachtments/ClimaterioSaludOsea.interface";
import { Colposcopia } from "@interface/Medical/Attachtments/Colposcopia.interface";
import { MaternoFetal } from "@interface/Medical/Attachtments/MaternoFetal/MaternoFetal.interface";
import { NutricionGeneral } from "@interface/Medical/Attachtments/Nutricion/NutricionGeneral.interface";
import { NutricionPerinatal } from "@interface/Medical/Attachtments/Nutricion/NutricionPerinatal.interface";
import { Oncologia } from "@interface/Medical/Attachtments/Oncologia.interface";
import { Uroginecologia } from "@interface/Medical/Attachtments/Uroginecologia.interface";

export const AttachtmentData: Attachtment = {
    medicalconsult_id: -1,
    medicalspecialty_id: -1,
    data: {
        type: 'form',
        form: {} as Uroginecologia |
        ClimaterioSaludOsea |
        MaternoFetal |
        NutricionPerinatal |
        NutricionGeneral |
        BiologiaReproduccion |
        CirugiaEndoscopica |
        Oncologia |
        Colposcopia,
    },
    update_by: -1,
    update_note: ''
}