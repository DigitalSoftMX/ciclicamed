import { OrderData } from "@data/Medical/Order.data";
import { PatientData } from "@data/Patient/Patient.data";
import { Checkup } from "@interface/Checkup/Checkup.interface";
import { CheckupCategoryData } from "./CheckupCategory.data";
import { CheckupStatusData } from "./CheckupStatus.data";

export const CheckupData: Checkup = {
    id: 0,
    checkupcategory_id: 0,
    patient_id: 0,
    checkupstatus_id: 0,
    created_at: '',
    updated_at: '',
    status: CheckupStatusData,
    category: CheckupCategoryData,
    patient: PatientData,
    order: []
}