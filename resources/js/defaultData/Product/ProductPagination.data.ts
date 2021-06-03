import { PaginationData } from "@data/General/Pagination.data";
import { ProductPagination } from "@interface/Product/ProductPagination.interface";
import { ProductData } from "./Product.data";

export const ProductPaginationData: ProductPagination = {
    pagination: PaginationData,
    data: [
        ProductData
    ]
}