import { UserPagination } from "../../interfaces/User/UserPagination.interface";
import { EmployeeData } from "../Employee/Employee.data";
import { PaginationData } from "../other/Pagination.data";
import { PatientData } from "../Patient/Patient.data";

export const UserPaginationData: UserPagination = {
    pagination: PaginationData,
    data: [
        PatientData ?? EmployeeData
    ]
}