export interface Specialty
{
    id: number;
    name: string;
    pivot: {
        employee_id: number,
        medicalspecialty_id: number,
        degree_title: string,
        school_name: string,
        license_number: string
    }
}