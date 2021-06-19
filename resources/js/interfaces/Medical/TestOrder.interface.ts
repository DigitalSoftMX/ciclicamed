export interface TestOrder {
    id: number;
    name: string;
    order_annotations: [{
        product_id: number,
        annotation: string
    }],
    created_at: string;
    discount: number;
    supplier_code: string;
    price: number
    product_code: string;
    productcategory_id: number;
    productstatus_id: number;
    quantity_available: number;
    unit: string;
    updated_at: string;
}
