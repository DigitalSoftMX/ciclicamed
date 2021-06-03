export interface AntecedentesFamiliares
{
    obesidad: boolean,
    hta: boolean,
    cancer: boolean,
    hipercolesterolemia: boolean,
    hipertrigliceridemia: boolean,
    diabetes: {
        check: boolean,
        description: string
    }
}