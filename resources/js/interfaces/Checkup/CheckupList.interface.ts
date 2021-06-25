import { CheckupItem } from "./CheckupItem.interface";

export interface CheckupList
{
    patient_id: number;
    payment_id: number;
    name: string;
    checkupcategory_id: number;
    checkupList: CheckupItem[]
}