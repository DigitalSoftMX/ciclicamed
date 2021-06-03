import { Pagination } from "../General/Pagination.interface";
import { Employee } from "./Employee.interface";

export interface EmployeePagination
{
    pagination: Pagination;
    data: Employee[]
}