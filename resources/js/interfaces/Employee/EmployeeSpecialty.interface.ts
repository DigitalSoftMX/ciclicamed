export interface EmployeeSpecialty
{
    id: number;
    name: string;
    pivot: {
        employee_id: number,
        medicalspecialty_id: number,
        degree_title: string,
        license_number: string,
    }
}