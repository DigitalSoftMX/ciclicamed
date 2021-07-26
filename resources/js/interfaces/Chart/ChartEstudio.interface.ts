export interface ChartEstudio
{
    doctores: {
        created_by: {
            first_name: string,
            last_name: string
        },
        total: number
    }[],
    total: number;
}