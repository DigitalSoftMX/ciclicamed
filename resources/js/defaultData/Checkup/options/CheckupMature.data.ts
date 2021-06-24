import { CheckupItem } from "@interface/Checkup/CheckupItem.interface";
import moment from "moment";

const time = moment().format('YYYY-MM-DD HH:mm:00');

export const CheckupMatureData: CheckupItem[] = [
    {
        code: 'IMA-0002',
        name: 'Densitometría ósea',
        branch_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'IMA-0005',
        name: 'Mastografía bilateral',
        branch_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
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
        code: 'LAB-0361',
        name: 'Checkup cíclica femenino',
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
        code: 'LAB-0074',
        name: 'Sangre oculta en heces (paciente de mas de 50 años)',
        branch_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
    {
        code: 'LAB-0710',
        name: 'Genotipificación (opcional)',
        branch_id: -1,
        consult_schedule_start: time,
        consult_schedule_finish: time
    },
]