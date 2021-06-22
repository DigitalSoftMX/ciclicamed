import moment from "moment";
import { ScheduleForm } from "../../interfaces/Schedule/ScheduleForm.interface";

export const ScheduleFormData: ScheduleForm = {
    patient_id: -1,
    doctor_id: -1,
    medicalconsultcategory_id: -1,
    branch_id: -1,
    consult_reason: '',
    consult_schedule_start: moment().format('YYYY-MM-DD HH:mm:00'),
    consult_schedule_finish: moment().format('YYYY-MM-DD HH:mm:00'),
    medicalspecialty_id: -1
}