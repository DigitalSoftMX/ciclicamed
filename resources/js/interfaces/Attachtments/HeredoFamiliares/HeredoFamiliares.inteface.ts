import { HeredoFamiliarCancer } from "./options/HeredoFamiliarCancer.interface";
import { HeredoFamiliarGeneral } from "./options/HeredoFamiliarGeneral.interface";

export interface HeredoFamiliares1
{
    hipertension: HeredoFamiliarGeneral
    cancer: HeredoFamiliarCancer;
    diabetes: HeredoFamiliarGeneral,
    tiroidea: HeredoFamiliarGeneral,
    otros: HeredoFamiliarGeneral
}