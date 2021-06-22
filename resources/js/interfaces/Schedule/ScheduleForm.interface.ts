export interface ScheduleForm
{
    id?: number;
    patient_id: number;
    doctor_id: number;
    medicalconsultcategory_id: number;
    branch_id: number;
    consult_reason: string;
    consult_schedule_start: any;
    consult_schedule_finish: any;
    medicalspecialty_id: number;
}