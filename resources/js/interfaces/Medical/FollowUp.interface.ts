import { CitasSubsecuentes } from "./Attachtments/CitasSubsecuentes.interface";

export interface FollowUp
{
    id: number;
    name: string;
    pivot: {
        medicalconsult_id: number,
        medicalspecialty_id: number,
        data: {
            form: CitasSubsecuentes
        },
        update_by?: number,
        update_note?: string
    }
}