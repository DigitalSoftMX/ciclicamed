export interface Test
{
    id: number;
    created_in: number;
    scheduled_in: number;
    finished_at: string;
    medicalteststatus_id: number;
    created_at: string;
    updated_at: string;
    medical_orders: {
        medicaltest_id: number,
        product_id: number,
        updated_by: number | null,
        update_note: string | null,
        created_at: string,
        updated_at: string,
    } | null;
    last_order: {
        medicaltest_id: number,
        product_id: number,
        updated_by: number | null,
        update_note: string | null,
        created_at: string,
        updated_at: string,
        product: {
            id: number,
            name: string
        }
    };
    medical_results: {
        medicaltest_id: number,
        created_by: number,
        results: {

        },
        result_note: string,
        updated_by: number,
        update_note: string,
        medicalteststatus_id: number,
        created_at: string;
        updated_at: string;
    }
}