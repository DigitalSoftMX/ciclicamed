import moment from "moment";
import { ScheduleForm } from "../../interfaces/Schedule/ScheduleForm.interface";

export const ScheduleFormData: ScheduleForm = {
    patient_id: -1,
    doctor_id: -1,
    medicalconsulttype_id: -1,
    branch_id: -1,
    consult_reason: '',
    consult_schedule_start: ''
}