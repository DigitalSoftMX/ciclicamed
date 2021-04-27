export interface Patient
{
    id: number;
    first_name: string;
    last_name: string;
    gender?: boolean;
    birthday?: Date;
    address?: string;
    phone?: string;
    cellphone?: string;
    email?: string;
    photo?: string;
    preregistration_id?: number
}