import { PatientData } from "@data/Patient/Patient.data";
import { Test } from "../../interfaces/Medical/Test.interface";
import { ConsultData } from "./Consult.data";
import { OrderData } from "./Order.data";

export const TestData: Test = {
    id: -1,
    test_code: '',
    created_in: -1,
    scheduled_in: -1,
    finished_at: '',
    medicalteststatus_id: -1,
    created_at: '',
    updated_at: '',
    order: OrderData,
    result: {
        medicaltest_id: -1,
        created_by: -1,
        results: {
            files: [],
            form: {},
            type: 'form'
        },
        notes: '',
        updated_by: -1,
        update_note: '',
        medicalteststatus_id: -1,
        created_at: '',
        updated_at: '',
    },
    patient: PatientData,
}