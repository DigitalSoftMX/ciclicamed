import { CheckupItem } from "@interface/Checkup/CheckupItem.interface";
import moment from "moment";

const time = moment().format('YYYY-MM-DD HH:mm:00');

export const CheckupTeenData: CheckupItem[] = [
    {
        code: 'IMA-0013',
        name: 'USG mamario',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time,
        doctor_id: 0
    },
    {
        code: 'IMA-0001',
        name: 'USG pélvico',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time,
        doctor_id: 0
    },
    {
        code: 'LAB-0586',
        name: 'Perfil hormonal femenino fase I (opcional)',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time,
        doctor_id: 0
    },
    {
        code: 'LAB-0854',
        name: 'Perfil hormonal femenino fase II (opcional)',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time,
        doctor_id: 0
    },
    {
        code: 'CON',
        name: 'Consulta de ginecología',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: 13,
        consult_schedule_start: time,
        consult_schedule_finish: time,
        doctor_id: 0
    },
    {
        code: 'CON',
        name: 'Consulta de valoración de reproducción',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: 7,
        consult_schedule_start: time,
        consult_schedule_finish: time,
        doctor_id: 0
    },
    {
        code: 'CON',
        name: 'Consulta de nutrición',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: 5,
        consult_schedule_start: time,
        consult_schedule_finish: time,
        doctor_id: 0
    },
]