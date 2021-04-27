import moment from "moment";
import { Schedule } from "../../interfaces/Schedule/Schedule.interface";
import { BranchData } from "../Branch/Branch.data";
import { DoctorData } from "../Doctor/Doctor.data";
import { ScheduleStatusData } from "./ScheduleStatus.data";
import { ScheduleTypeData } from "./ScheduleType.data";

export const ScheduleData:Schedule = {
    id: -1,
    consult_schedule_start: moment('01-01-1970', 'MM-DD-YYYY').format('l LT'),
    consult_schedule_finish: moment('01-01-1970', 'MM-DD-YYYY').format('l LT'),
    branch_id: -1,
    doctor_id: -1,
    consult_reason: '',
    medicalconsulttype_id: -1,
    medicalconsultstatus_id: -1,
    patient_id: -1,
    doctor: DoctorData,
    status: ScheduleStatusData,
    type: ScheduleTypeData,
    branch: BranchData
}
