import { Order } from "@interface/Medical/Order.interface";
import { Patient } from "@interface/Patient/Patient.interface";
import { CheckupCategory } from "./CheckupCategory.interface";

export interface Checkup
{
    id: number;
    checkupcategory_id: number;
    patient_id: number;
    checkupstatus_id: number;
    created_at: string;
    updated_at: string;
    category?: CheckupCategory;
    patient?: Patient;
    order?: Order[]
}