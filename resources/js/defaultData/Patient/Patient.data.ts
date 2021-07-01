import { UserData } from "@data/User/User.data";
import { Patient } from "../../interfaces/Patient/Patient.interface";
import { PreregistrationData } from "./Preregistration.data";

export const PatientData: Patient = {
    id: -1,
    patient_code: '',
    first_name: '',
    last_name: '',
    gender: 0,
    birthday: '2000-01-01',
    address: '',
    phone: '',
    cellphone: '',
    photo: '',
    preregistration_id: -1,
    preregistration: PreregistrationData,
    user: UserData
}