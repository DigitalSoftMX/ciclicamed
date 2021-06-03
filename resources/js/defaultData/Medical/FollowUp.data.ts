import { FollowUp } from "../../interfaces/Medical/FollowUp.interface";
import { CitasSubsecuentesData } from "./Attachments/CitasSubsecuentes.data";

export const FollowUpData: FollowUp = {
    id: -1,
    name: '',
    pivot: {
        medicalconsult_id: -1,
        medicalspecialty_id: -1,
        data: {
            form: CitasSubsecuentesData
        },
        update_by: -1,
        update_note: ''
    }
}