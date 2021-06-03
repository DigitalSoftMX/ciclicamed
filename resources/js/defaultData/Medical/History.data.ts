import { History } from '../../interfaces/Medical/History.interface';
import { HistorialClinicoData } from "./Attachments/HistorialClinico/HistorialClinico.data";

export const HistoryData: History = {
    medicalconsult_id: 0,
    data: {
        type: '',
        form: HistorialClinicoData
    },
    updated_by: 0,
    update_note: '',
    created_at: '',
    updated_at: ''
}