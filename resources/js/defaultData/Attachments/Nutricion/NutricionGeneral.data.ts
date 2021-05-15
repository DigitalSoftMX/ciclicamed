import { NutricionGeneral } from "@/resources/js/interfaces/Attachtments/Nutricion/NutricionGeneral.interface"
import { NutricionPerinatal } from "@/resources/js/interfaces/Attachtments/Nutricion/NutricionPerinatal.interface"
import { ActividadFisicaData } from "./options/ActividadFisica.data"
import { AntecedentesFamiliaresData } from "./options/AntecedentesFamiliares.data"
import { AntecedentesSaludData } from "./options/AntecedentesSalud.data"
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
    recordatorioNutricion: RecordatorioNutricionData
}