import { Doctor } from '../Doctor/Doctor.interface';
import { ScheduleStatus } from './ScheduleStatus.interface';
import { ScheduleType } from './ScheduleType.interface';
import { Branch } from '../Branch/Branch.interface';
import { Patient } from '../Patient/Patient.interface';

export interface Schedule
{
    id: number;
    consult_schedule_start: string;
    consult_schedule_finish: string;
    consult_start_at?: string;
    consult_finish_at?: string;
    nurse_start_at?: string;
    nurse_finish_at?: string;
    branch_id: number;
    doctor_id: number;
    consult_reason?: string;
    medicalconsultcategory_id?: number;
    medicalconsultstatus_id?: number;
    medicalspecialty_id?: number;
    patient_id?: number;
    doctor?: Doctor;
    patient?: Patient;
    status?: ScheduleStatus;
    type?: ScheduleType;
    branch?: Branch;
    product_id: number;
    assistant_start_at?: string;
    assistant_finish_at?: string;
}