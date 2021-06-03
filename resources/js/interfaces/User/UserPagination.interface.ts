import { Employee } from "@interface/Employee/Employee.interface";
import { Pagination } from "@interface/General/Pagination.interface";
import { Patient } from "@interface/Patient/Patient.interface";

export interface UserPagination
{
    pagination: Pagination;
    data: Patient[] | Employee[]
}