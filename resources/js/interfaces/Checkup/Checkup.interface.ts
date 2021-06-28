import { Consult } from "@interface/Medical/Consult.interface";
import { Order } from "@interface/Medical/Order.interface";
import { Patient } from "@interface/Patient/Patient.interface";
import { CheckupCategory } from "./CheckupCategory.interface";
import { CheckupStatus } from "./CheckupStatus.interface";

export interface Checkup
{
    id: number;
    checkupcategory_id: number;
    patient_id: number;
    checkupstatus_id: number;
    created_at: string;
    updated_at: string;
    status: CheckupStatus;
    category?: CheckupCategory;
    patient?: Patient;
    order?: Order[];
    consults?: Consult[];
}