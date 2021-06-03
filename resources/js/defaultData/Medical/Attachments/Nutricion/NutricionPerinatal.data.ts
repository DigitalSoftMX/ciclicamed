import { NutricionPerinatal } from "@interface/Medical/Attachtments/Nutricion/NutricionPerinatal.interface"
import { ActividadFisicaData } from "./options/ActividadFisica.data"
import { AntecedentesFamiliaresData } from "./options/AntecedentesFamiliares.data"
import { AntecedentesSaludData } from "./options/AntecedentesSalud.data"
import { ConsumoFrecuenciaData } from "./options/ConsumoFrecuencia.data"
import { EmbarazoActualData } from "./options/EmbarazoActual.data"
import { EmbarazosAnterioresData } from "./options/EmbarazosAnteriores.data"
import { IndicadoresBioquimicosData } from "./options/IndicadoresBioquimicos.data"
import { IndicadoresDieteticosData } from "./options/IndicadoresDieteticos.data"
import { RecordatorioNutricionData } from "./options/RecordatorioNutricion.data"

export const NutricionPerinatalData: NutricionPerinatal = {
    embarazosAnteriores: EmbarazosAnterioresData,
    embarazoActual: EmbarazoActualData,
    antecedentesSalud: AntecedentesSaludData,
    antecedentesFamiliares: AntecedentesFamiliaresData,
    actividadFisica: ActividadFisicaData,
    consumoFrecuencia: ConsumoFrecuenciaData,
    indicadoresBioquimicos: IndicadoresBioquimicosData,
    indicadoresDieteticos: IndicadoresDieteticosData,
    recordatorioNutricion: RecordatorioNutricionData
}