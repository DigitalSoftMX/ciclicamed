import { OrderData } from "@data/Medical/Order.data";
import { PatientData } from "@data/Patient/Patient.data";
import { Checkup } from "@interface/Checkup/Checkup.interface";
import { CheckupCategoryData } from "./CheckupCategory.data";

export const CheckupData: Checkup = {
    id: -1,
    checkupcategory_id: -1,
    patient_id: -1,
    checkupstatus_id: -1,
    created_at: '',
    updated_at: '',
    category: CheckupCategoryData,
    patient: PatientData,
    order: []
}