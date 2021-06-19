export interface Order
{
    medicaltest_id: number,
    product_id: number,
    updated_by: number,
    update_note: string,
    created_at: string,
    updated_at: string,
    product: {
        id: number,
        name: string,
        product_code?: string,
        supplier_code?: string
    },
    status?: number
}