
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
import cloneDeep from "lodash/cloneDeep"

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
        sem1: cloneDeep(AntropometricosGeneralData),
        sem2: cloneDeep(AntropometricosGeneralData),
        sem3: cloneDeep(AntropometricosGeneralData),
        sem4: cloneDeep(AntropometricosGeneralData),
        total1: cloneDeep(AntropometricosGeneralData),
        sem5: cloneDeep(AntropometricosGeneralData),
        sem6: cloneDeep(AntropometricosGeneralData),
        sem7: cloneDeep(AntropometricosGeneralData),
        sem8: cloneDeep(AntropometricosGeneralData),
        total2: cloneDeep(AntropometricosGeneralData),
    }
}