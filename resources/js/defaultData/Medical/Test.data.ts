import { Test } from "../../interfaces/Medical/Test.interface";
import { OrderData } from "./Order.data";

export const TestData: Test = {
    id: -1,
    created_in: -1,
    scheduled_in: -1,
    finished_at: '',
    medicalteststatus_id: -1,
    created_at: '',
    updated_at: '',
    last_order: OrderData,
    medical_results: {
        medicaltest_id: -1,
        created_by: -1,
        results: {

        },
        result_note: '',
        updated_by: -1,
        update_note: '',
        medicalteststatus_id: -1,
        created_at: '',
        updated_at: '',
    }
}