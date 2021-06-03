import { PaginationData } from "@data/General/Pagination.data";
import { EmployeePagination } from "@interface/Employee/EmployeePagination.interface";
import { EmployeeData } from "./Employee.data";

export const EmployeePaginationData: EmployeePagination = {
    pagination: PaginationData,
    data: [
        EmployeeData
    ]
}