import { ActividadFisica } from "./options/ActividadFisica.interface";
import { AntecedentesFamiliares } from "./options/AntecedentesFamiliares.interface";
import { AntecedentesSalud } from "./options/AntecedentesSalud.interface";
import { Antropometria } from "./options/Antropometria.interface";
import { ConsumoFrecuencia } from "./options/ConsumoFrecuencia.interface";
import { EmbarazoActual } from "./options/EmbarazoActual.interface";
import { EmbarazosAnteriores } from "./options/EmbarazosAnteriores.interface";
import { IndicadoresBioquimicos } from "./options/IndicadoresBioquimicos.interface";
import { IndicadoresDieteticos } from "./options/IndicadoresDieteticos.interface";
import { RecordatorioNutricion } from "./options/RecordatorioNutricion.interface";

export interface NutricionPerinatal
{
    embarazosAnteriores: EmbarazosAnteriores,
    embarazoActual: EmbarazoActual,
    antecedentesSalud: AntecedentesSalud,
    antecedentesFamiliares: AntecedentesFamiliares,
    actividadFisica: ActividadFisica,
    consumoFrecuencia: ConsumoFrecuencia,
    indicadoresBioquimicos: IndicadoresBioquimicos,
    indicadoresDieteticos: IndicadoresDieteticos,
    recordatorioNutricion: RecordatorioNutricion,
    antropometria: {
        fum: string,
        consulta1: Antropometria,
        consulta2: Antropometria,
        consulta3: Antropometria,
        consulta4: Antropometria,
        consulta5: Antropometria
    }
}