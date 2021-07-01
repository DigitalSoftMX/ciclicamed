import { Patient } from "@interface/Patient/Patient.interface";
import { Order } from "./Order.interface";
import { TestStatus } from "./TestStatus.interface";

export interface Test
{
    id: number;
    created_in: number;
    scheduled_in: number;
    finished_at: string;
    medicalteststatus_id: number;
    created_at: string;
    updated_at: string;
    order: Order;
    medical_results?: {
        medicaltest_id: number,
        created_by: number,
        results: {

        },
        result_note: string,
        updated_by: number,
        update_note: string,
        medicalteststatus_id: number,
        created_at: string;
        updated_at: string;
    },
    patient?: Patient
    status?: TestStatus
}