import { CheckupItem } from "./CheckupItem.interface";

export interface CheckupList
{
    checkup_id: number;
    patient_id: number;
    payment_id: number;
    name: string;
    checkupcategory_id: number;
    checkupList: CheckupItem[]
}