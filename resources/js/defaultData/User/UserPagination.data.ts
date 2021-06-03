import { EmployeeData } from "@data/Employee/Employee.data";
import { PaginationData } from "@data/General/Pagination.data";
import { PatientData } from "@data/Patient/Patient.data";
import { UserPagination } from "@interface/User/UserPagination.interface";

export const UserPaginationData: UserPagination = {
    pagination: PaginationData,
    data: [
        PatientData ?? EmployeeData
    ]
}