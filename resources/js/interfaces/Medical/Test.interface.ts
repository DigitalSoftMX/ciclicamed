import { Patient } from "@interface/Patient/Patient.interface";
import { Product } from "@interface/Product/Product.interface";
import { Consult } from "./Consult.interface";
import { Order } from "./Order.interface";
import { TestStatus } from "./TestStatus.interface";

export interface Test
{
    id: number;
    test_code: string;
    created_in: number;
    scheduled_in: number;
    finished_at: string;
    medicalteststatus_id: number;
    created_at: string;
    updated_at: string;
    order: Order;
    result?: {
        medicaltest_id: number,
        created_by: number,
        results: {

        },
        notes: string,
        updated_by: number,
        update_note: string,
        medicalteststatus_id: number,
        created_at: string;
        updated_at: string;
    },
    patient?: Patient
    status?: TestStatus,
    consult_scheduled?: Consult
}