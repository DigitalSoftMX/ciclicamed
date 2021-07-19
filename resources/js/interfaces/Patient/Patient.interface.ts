import { User } from "@interface/User/User.interface";
import { Preregistration } from "./Preregistration.interface";
export interface Patient
{
    id: number;
    patient_code: string;
    first_name: string;
    last_name: string;
    gender?: number;
    birthday?: string;
    address?: string;
    phone?: string;
    cellphone?: string;
    photo?: string;
    user: User;
    preregistration_id?: number;
    preregistration?: Preregistration
}