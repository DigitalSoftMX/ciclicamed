export interface Prescription
{
    medicalconsult_id?: number;
    medicament_id: number;
    administation_type: string;
    rate: string;
    duration: string;
    medicament?: {
        id: number,
        code: number,
        name: string,
        presentation: string
    };
    update_by: string | null;
    update_note: string | null;
}