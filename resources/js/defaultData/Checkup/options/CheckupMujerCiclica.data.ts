import { CheckupItem } from "@interface/Checkup/CheckupItem.interface";
import moment from "moment";

const time = moment().format('YYYY-MM-DD HH:mm:00');

export const CheckupMujerCiclicaData: CheckupItem[] = [
    {
        code: 'IMA-0013',
        name: 'USG mamario',
        branch_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'IMA-0001',
        name: 'USG pélvico',
        branch_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0015',
        name: 'Cultivos especiales',
        branch_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0040',
        name: 'Papanicolau',
        branch_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0586',
        name: 'Perfil hormonal femenino fase I',
        branch_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0854',
        name: 'Perfil hormonal femenino fase II',
        branch_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0710',
        name: 'Genotipificación de VPH (opcional)',
        branch_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
]