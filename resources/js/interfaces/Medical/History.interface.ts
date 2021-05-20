import { HistorialClinico } from "../Attachtments/HistorialClinico/HistorialClinico.interface";

export interface History
{
    medicalconsult_id: number;
    data: {
        type: string,
        form: HistorialClinico
    },
    updated_by: number;
    update_note: string;
    created_at: string;
    updated_at: string;
}