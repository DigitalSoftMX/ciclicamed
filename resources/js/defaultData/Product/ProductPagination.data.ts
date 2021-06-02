import { ProductPagination } from "../../interfaces/Product/ProductPagination.interface";
import { PaginationData } from "../other/Pagination.data";
import { ProductData } from "./Product.data";

export const ProductPaginationData: ProductPagination = {
    pagination: PaginationData,
    data: [
        ProductData
    ]
}