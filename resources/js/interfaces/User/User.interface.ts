import { UserStatus } from "./UserStatus.interface";

export interface User
{
    id: number;
    email: string;
    email_verified_at:string;
    userstatus_id: number;
    usercategory_id: number;
    created_at: string;
    updated_at: string;
    status: UserStatus
}