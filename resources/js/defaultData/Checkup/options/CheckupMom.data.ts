import { CheckupItem } from "@interface/Checkup/CheckupItem.interface";
import moment from "moment";

const time = moment().format('YYYY-MM-DD HH:mm:00');

export const CheckupMom: CheckupItem[] = [
    {
        code: 'LAB-0058',
        name: 'Perfil prenatal (primer trimestre)',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0061',
        name: 'Perfil tiroideo de seguimiento básico (primer trimestre)',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0077',
        name: 'Curva de tolerancia de la glucosa de 120 min (segundo trimestre)',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0008',
        name: 'Biometría hemática (segundo trimestre)',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0025',
        name: 'EGO (segundo trimestre)',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0015',
        name: 'Cultivos especiales (tercer trimestre)',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0010',
        name: 'Urocultivo (tercer trimestre)',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0060',
        name: 'Perfil preoperatorio (tercer trimestre)',
        branch_id: -1,
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
]