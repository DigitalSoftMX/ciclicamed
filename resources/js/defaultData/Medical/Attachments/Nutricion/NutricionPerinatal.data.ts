import { NutricionPerinatal } from "@interface/Medical/Attachtments/Nutricion/NutricionPerinatal.interface"
import cloneDeep from "lodash/cloneDeep"
import { ActividadFisicaData } from "./options/ActividadFisica.data"
import { AntecedentesFamiliaresData } from "./options/AntecedentesFamiliares.data"
import { AntecedentesSaludData } from "./options/AntecedentesSalud.data"
import { AntropometriaData } from "./options/Antropometria.data"
import { ConsumoFrecuenciaData } from "./options/ConsumoFrecuencia.data"
import { EmbarazoActualData } from "./options/EmbarazoActual.data"
import { EmbarazosAnterioresData } from "./options/EmbarazosAnteriores.data"
import { IndicadoresBioquimicosData } from "./options/IndicadoresBioquimicos.data"
import { IndicadoresDieteticosData } from "./options/IndicadoresDieteticos.data"
import { RecordatorioNutricionData } from "./options/RecordatorioNutricion.data"
import { PesoData } from "./options/Peso.data"
import { AspectosGinecologicosData } from "./options/AspectosGinecologicos.data"

export const NutricionPerinatalData: NutricionPerinatal = {
    peso: PesoData,
    embarazosAnteriores: EmbarazosAnterioresData,
    embarazoActual: EmbarazoActualData,
    antecedentesSalud: AntecedentesSaludData,
    antecedentesFamiliares: AntecedentesFamiliaresData,
    aspectosGinecologicos: AspectosGinecologicosData,
    actividadFisica: ActividadFisicaData,
    consumoFrecuencia: ConsumoFrecuenciaData,
    indicadoresBioquimicos: IndicadoresBioquimicosData,
    indicadoresDieteticos: IndicadoresDieteticosData,
    recordatorioNutricion: RecordatorioNutricionData,
    antropometria: {
        fum: '',
        consulta1: cloneDeep(AntropometriaData),
        consulta2: cloneDeep(AntropometriaData),
        consulta3: cloneDeep(AntropometriaData),
        consulta4: cloneDeep(AntropometriaData),
        consulta5: cloneDeep(AntropometriaData),
    }
}