import { User } from "../User/User.interface";
import { EmployeeCategory } from "./EmployeeCategory.interface";
import { EmployeeSpecialty } from "./EmployeeSpecialty.interface";
import { EmployeeStatus } from "./EmployeeStatus.interface";

export interface Employee
{
    id: number;
    first_name: string;
    last_name: string;
    gender: number;
    birthday: string;
    address: string;
    phone: string;
    cellphone: string;
    photo: string;
    employeecategory_id: number;
    employeestatus_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    user: User;
    category: EmployeeCategory;
    status: EmployeeStatus;
    specialties: EmployeeSpecialty[];
}