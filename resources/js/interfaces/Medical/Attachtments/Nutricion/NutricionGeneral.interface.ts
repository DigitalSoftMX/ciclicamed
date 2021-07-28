import { ActividadFisica } from "./options/ActividadFisica.interface";
import { AntecedentesFamiliares } from "./options/AntecedentesFamiliares.interface";
import { AntecedentesSalud } from "./options/AntecedentesSalud.interface";
import { AntropometricosGeneral } from "./options/AntropometricosGeneral.interface";
import { AspectosGinecologicos } from "./options/AspectosGinecologicos.interface";
import { ConsumoFrecuencia } from "./options/ConsumoFrecuencia.interface";
import { EmbarazoActual } from "./options/EmbarazoActual.interface";
import { EmbarazosAnteriores } from "./options/EmbarazosAnteriores.interface";
import { IndicadoresBioquimicos } from "./options/IndicadoresBioquimicos.interface";
import { IndicadoresDieteticos } from "./options/IndicadoresDieteticos.interface";
import { Peso } from "./options/Peso.interface";
import { RecordatorioNutricion } from "./options/RecordatorioNutricion.interface";

export interface NutricionGeneral
{
    peso: Peso,
    antecedentesSalud: AntecedentesSalud,
    antecedentesFamiliares: AntecedentesFamiliares,
    aspectosGinecologicos: AspectosGinecologicos,
    actividadFisica: ActividadFisica,
    consumoFrecuencia: ConsumoFrecuencia,
    indicadoresBioquimicos: IndicadoresBioquimicos,
    indicadoresDieteticos: IndicadoresDieteticos,
    recordatorioNutricion: RecordatorioNutricion
    antropometricos: {
        pesoMinino: number;
        pesoMaximo: number;
        pesoIdeal: number;
        indicador: string;
        sem1: AntropometricosGeneral,
        sem2: AntropometricosGeneral,
        sem3: AntropometricosGeneral,
        sem4: AntropometricosGeneral,
        total1: AntropometricosGeneral,
        sem5: AntropometricosGeneral,
        sem6: AntropometricosGeneral,
        sem7: AntropometricosGeneral,
        sem8: AntropometricosGeneral,
        total2: AntropometricosGeneral
    }
}