import { EmployeePagination } from "../../interfaces/Employee/EmployeePagination.interface";
import { PaginationData } from "../other/Pagination.data";
import { EmployeeData } from "./Employee.data";

export const EmployeePaginationData: EmployeePagination = {
    pagination: PaginationData,
    data: [
        EmployeeData
    ]
}