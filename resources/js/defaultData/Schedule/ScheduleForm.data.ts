import moment from "moment";
import { ScheduleForm } from "../../interfaces/Schedule/ScheduleForm.interface";

export const ScheduleFormData: ScheduleForm = {
    patient_id: 0,
    doctor_id: 0,
    medicalconsulttype_id: 0,
    branch_id: 0,
    consult_reason: '',
    consult_schedule_start: moment('01-01-1970').format('l LT')
}