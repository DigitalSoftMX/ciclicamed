import { Prescription } from "../../interfaces/Medical/Prescription.interface";
import { MedicamentData } from "./Medicament.data";

export const PrescriptionData: Prescription = {
    medicalconsult_id: -1,
    medicament_id: 0,
    administration_type: '',
    rate: '',
    duration: '',
    medicament: MedicamentData,
    update_by: null,
    update_note: null
}