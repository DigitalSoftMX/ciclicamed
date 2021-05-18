export interface TestOrder {
    id: number;
    name: string;
    order_annotations: [{
        product_id: number,
        annotation: string
    }]
}
