import { TestOrder } from "@interface/Medical/TestOrder.interface";
import { ProductCategory } from "./ProductCategory.interface";
import { ProductStatus } from "./ProductStatus.interface";
export interface Product
{
    id: number;
    product_code: string;
    supplier_code: string;
    name: string;
    unit: string;
    quantity_available: number;
    price: number;
    discount: number;
    productcategory_id: number;
    productstatus_id: number;
    created_at: string;
    updated_at: string;
    status: ProductStatus;
    category: ProductCategory;
    order_annotations?: {
        product_id: number,
        annotation: string
    }[]
}