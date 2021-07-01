import { Medicament } from "./Medicament.interface";

export interface Prescription
{
    medicalconsult_id?: number;
    medicament_id: number;
    administation_type: string;
    rate: string;
    duration: string;
    medicament?: Medicament;
    update_by: string | null;
    update_note: string | null;
}