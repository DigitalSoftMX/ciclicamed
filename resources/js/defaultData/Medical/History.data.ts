import { History } from '../../interfaces/Medical/History.interface';
import { HistorialClinicoData } from "./Attachments/HistorialClinico/HistorialClinico.data";

export const HistoryData: History = {
    medicalconsult_id: -1,
    data: {
        type: 'form',
        form: HistorialClinicoData
    },
    updated_by: -1,
    update_note: '',
    created_at: '',
    updated_at: ''
}