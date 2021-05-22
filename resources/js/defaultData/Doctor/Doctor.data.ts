import { Doctor } from "../../interfaces/Doctor/Doctor.interface";

export const DoctorData: Doctor = {
    id: -1,
    first_name: '',
    last_name: '',
    gender: -1,
    birthday: '',
    address: '',
    phone: '',
    cellphone: '',
    email: '',
    photo: '',
    employeecategory_id: -1,
    employeestatus_id: -1,
    user_id: -1,
    created_at: '',
    updated_at: '',
    specialties: [
        {
            id: -1,
            name: '',
            pivot: {
                employee_id: -1,
                medicalspecialty_id: -1,
                degree_title: '',
                license_number: '',
                school_name: ''
            }
        }
    ]
}