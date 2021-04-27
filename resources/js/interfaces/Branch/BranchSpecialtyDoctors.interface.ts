import { Doctor } from "../Doctor/Doctor.interface";

export interface BranchSpecialtyDoctors
{
    id: number;
    name: string;
    doctors: Doctor[] 
}