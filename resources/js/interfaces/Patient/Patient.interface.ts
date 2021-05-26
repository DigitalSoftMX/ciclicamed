import { Preregistration } from "./Preregistration.interface";

export interface Patient
{
    id: number;
    patient_code?: string;
    first_name: string;
    last_name: string;
    gender?: boolean;
    birthday?: string;
    address?: string;
    phone?: string;
    cellphone?: string;
    email?: string;
    photo?: string;
    preregistration_id?: number;
    preregistration?: Preregistration
}