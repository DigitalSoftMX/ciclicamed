import { Prescription } from "../../interfaces/Medical/Prescription.interface";

export const PrescriptionData: Prescription = {
    medicalconsult_id: -1,
    medicament_id: 0,
    administation_type: '',
    rate: '',
    duration: '',
    medicament: {
        id: -1,
        code: -1,
        name: '',
        presentation: ''
    },
    update_by: null,
    update_note: null
}