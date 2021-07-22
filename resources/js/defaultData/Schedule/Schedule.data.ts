import moment from "moment";
import { Schedule } from "../../interfaces/Schedule/Schedule.interface";
import { BranchData } from "../Branch/Branch.data";
import { DoctorData } from "../Doctor/Doctor.data";
import { ScheduleStatusData } from "./ScheduleStatus.data";
import { ScheduleTypeData } from "./ScheduleType.data";

export const ScheduleData:Schedule = {
    id: 0,
    consult_schedule_start: moment().format('YYYY-MM-DD HH:mm:00'),
    consult_schedule_finish: moment().format('YYYY-MM-DD HH:mm:00'),
    branch_id: 0,
    doctor_id: 0,
    consult_reason: '',
    medicalconsultcategory_id: 0,
    medicalconsultstatus_id: 0,
    medicalspecialty_id: 0,
    patient_id: 0,
    doctor: DoctorData,
    status: ScheduleStatusData,
    type: ScheduleTypeData,
    branch: BranchData,
    product_id: 0
}
