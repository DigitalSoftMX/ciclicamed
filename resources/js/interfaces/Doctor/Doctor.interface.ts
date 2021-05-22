import { Specialty } from "./Specialty.interface";

export interface Doctor
{
    id: number;
    first_name: string;
    last_name: string;
    gender?: number;
    birthday?: string;
    address?: string;
    phone?: string;
    cellphone?: string;
    email?: string;
    photo?: string;
    employeecategory_id?: number;
    employeestatus_id?: number;
    user_id?: number;
    created_at?: string;
    updated_at?: string;
    specialties?: Specialty[]
}