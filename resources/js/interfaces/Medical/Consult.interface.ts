import { Status } from "@interface/General/Status.interface";
import { Patient } from "@interface/Patient/Patient.interface";
import { Order } from "./Order.interface";
import { Prescription } from "./Prescription.interface";
import { Test } from "./Test.interface";

export interface Consult
{
    id: number;
    patient_id: number;
    doctor_id: number | null;
    created_by: number;
    medicalconsultcategory_id: number;
    updated_by: number | null;
    update_note: string | null;
    consult_reason: string;
    consult_schedule_start: string;
    consult_schedule_finish: string;
    consult_start_at: string;
    consult_finish_at?: string;
    nurse_start_at?: string;
    nurse_finish_at?: string;
    assistant_start_at?: string;
    assistant_finish_at?: string;
    branch_id: number;
    medicalconsultstatus_id: number;
    medicalspecialty_id: number;
    created_at: string;
    updated_at: string;
    checkup_id: number;
    test_scheduled?: Test,
    status?: Status,
    prescriptions?: Prescription[],
    patient?: Patient
}