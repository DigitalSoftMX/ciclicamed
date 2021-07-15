import { Employee } from "../../interfaces/Employee/Employee.interface";
import { UserData } from "../User/User.data";
import { EmployeeCategoryData } from "./EmployeeCategory.data";
import { EmployeeSpecialtyData } from "./EmployeeSpecialty.data";
import { EmployeeStatusData } from "./EmployeeStatus.data";

export const EmployeeData: Employee = {
    id: -1,
    first_name: '',
    last_name: '',
    gender: -1,
    birthday: '',
    address: '',
    phone: '',
    cellphone: '',
    photo: '',
    employeecategory_id: -1,
    employeestatus_id: -1,
    user_id: -1,
    created_at: '',
    updated_at: '',
    user: UserData,
    category: EmployeeCategoryData,
    status: EmployeeStatusData,
    specialties: []
}