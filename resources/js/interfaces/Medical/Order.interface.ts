export interface Order
{
    medicaltest_id: number,
    product_id: number,
    updated_by: number | null,
    update_note: string | null,
    created_at: string,
    updated_at: string,
    product: {
        id: number,
        name: string
    },
    status?: number | null
}