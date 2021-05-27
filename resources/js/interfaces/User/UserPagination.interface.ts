import { Employee } from "../Employee/Employee.interface";
import { Pagination } from "../other/Pagination.interface";
import { Patient } from "../Patient/Patient.interface";

export interface UserPagination
{
    pagination: Pagination;
    data: Patient[] | Employee[]
}