import { CheckupItem } from "@interface/Checkup/CheckupItem.interface";
import moment from "moment";

const time = moment().format('YYYY-MM-DD HH:mm:00');

export const CheckupDiagnosticoPrenatal: CheckupItem[] = [
    {
        code: 'LAB-0036',
        name: 'Marcadores séricos primer trimestre',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time,
        doctor_id: 0
    },
    {
        code: 'IMA-0009',
        name: 'USG primer trimestre',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time,
        doctor_id: 0
    },
    {
        code: 'IMA-0009',
        name: 'USG segundo trimestre',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time,
        doctor_id: 0
    },
    {
        code: 'IMA-0009',
        name: 'USG tercer trimestre',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time,
        doctor_id: 0
    },
    {
        code: 'IMA-0003',
        name: 'Ecocardiograma fetal (opcional)',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
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