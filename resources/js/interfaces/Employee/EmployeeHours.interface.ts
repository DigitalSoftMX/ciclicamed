import { Branch } from "@interface/Branch/Branch.interface";

export interface EmployeeHours
{
    employee_id: number;
    start_day: number;
    start_time: string;
    finish_day: number;
    finish_time: string;
    branch_id: number;
    created_at: string;
    updated_at: string;
    branch?: Branch;
}