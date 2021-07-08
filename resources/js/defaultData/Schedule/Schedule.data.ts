import moment from "moment";
import { Schedule } from "../../interfaces/Schedule/Schedule.interface";
import { BranchData } from "../Branch/Branch.data";
import { DoctorData } from "../Doctor/Doctor.data";
import { ScheduleStatusData } from "./ScheduleStatus.data";
import { ScheduleTypeData } from "./ScheduleType.data";

export const ScheduleData:Schedule = {
    id: -1,
    consult_schedule_start: moment().format('YYYY-MM-DD HH:mm:00'),
    consult_schedule_finish: moment().format('YYYY-MM-DD HH:mm:00'),
    branch_id: -1,
    doctor_id: -1,
    consult_reason: '',
    medicalconsultcategory_id: -1,
    medicalconsultstatus_id: -1,
    medicalspecialty_id: -1,
    patient_id: -1,
    doctor: DoctorData,
    status: ScheduleStatusData,
    type: ScheduleTypeData,
    branch: BranchData,
    product_id: -1
}
