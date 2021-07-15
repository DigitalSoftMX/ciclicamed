import { EmployeeData } from "@data/Employee/Employee.data";
import { User } from "@interface/User/User.interface";
import { UserStatusData } from "./UserStatus.data";

export const UserData: User = {
    id: -1,
    email: '',
    email_verified_at:'',
    userstatus_id: -1,
    usercategory_id: -1,
    created_at: '',
    updated_at: '',
    status: UserStatusData,
    roles: []
}