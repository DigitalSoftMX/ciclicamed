import { Product } from "../../interfaces/Product/Product.interface";
import { ProductCategoryData } from "./ProductCategory.data";
import { ProductStatusData } from "./ProductStatus.data";

export const ProductData: Product = {
    id: -1,
    product_code: '',
    lans_code: '',
    name: '',
    unit: '',
    quantity_available: 0,
    price: 0,
    discount: 0,
    productcategory_id: -1,
    productstatus_id: -1,
    created_at: '',
    updated_at: '',
    status: ProductStatusData,
    category: ProductCategoryData,
}