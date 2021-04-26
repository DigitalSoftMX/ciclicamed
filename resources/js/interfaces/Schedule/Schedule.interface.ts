import { Doctor } from '../Doctor/Doctor.interface';
import { ScheduleStatus } from './ScheduleStatus.interface';
import { ScheduleType } from './ScheduleType.interface';
import { Branch } from '../Branch/Branch.interface';

export interface Schedule
{
    id: number;
    consult_schedule_start: Date;
    consult_schedule_finish: Date;
    branch_id: number;
    doctor_id: number;
    medicalconsulttype_id: number;
    medicalconsultstatus_id: number;
    patient_id: number;
    doctor?: Doctor;
    status: ScheduleStatus;
    type: ScheduleType;
    branch: Branch
}