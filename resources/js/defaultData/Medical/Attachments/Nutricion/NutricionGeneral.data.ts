
import { NutricionGeneral } from "@interface/Medical/Attachtments/Nutricion/NutricionGeneral.interface"
import { ActividadFisicaData } from "./options/ActividadFisica.data"
import { AntecedentesFamiliaresData } from "./options/AntecedentesFamiliares.data"
import { AntecedentesSaludData } from "./options/AntecedentesSalud.data"
import { AntropometricosGeneralData } from "./options/AntropometricosGeneral.data"
import { AspectosGinecologicosData } from "./options/AspectosGinecologicos.data"
import { ConsumoFrecuenciaData } from "./options/ConsumoFrecuencia.data"
import { IndicadoresBioquimicosData } from "./options/IndicadoresBioquimicos.data"
import { IndicadoresDieteticosData } from "./options/IndicadoresDieteticos.data"
import { PesoData } from "./options/Peso.data"
import { RecordatorioNutricionData } from "./options/RecordatorioNutricion.data"

export const NutricionGeneralData: NutricionGeneral = {
    peso: PesoData,
    antecedentesSalud: AntecedentesSaludData,
    antecedentesFamiliares: AntecedentesFamiliaresData,
    aspectosGinecologicos: AspectosGinecologicosData,
    actividadFisica: ActividadFisicaData,
    consumoFrecuencia: ConsumoFrecuenciaData,
    indicadoresBioquimicos: IndicadoresBioquimicosData,
    indicadoresDieteticos: IndicadoresDieteticosData,
    recordatorioNutricion: RecordatorioNutricionData,
    antropometricos: {
        pesoMinino: 0,
        pesoMaximo: 0,
        pesoIdeal: 0,
        indicador: '',
        sem1: AntropometricosGeneralData,
        sem2: AntropometricosGeneralData,
        sem3: AntropometricosGeneralData,
        sem4: AntropometricosGeneralData,
        total1: AntropometricosGeneralData,
        sem5: AntropometricosGeneralData,
        sem6: AntropometricosGeneralData,
        sem7: AntropometricosGeneralData,
        sem8: AntropometricosGeneralData,
        total2: AntropometricosGeneralData
    }
}