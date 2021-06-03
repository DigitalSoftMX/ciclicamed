import { Pagination } from "@interface/General/Pagination.interface";
import { Product } from "./Product.interface";

export interface ProductPagination
{
    pagination: Pagination;
    data: Product[]
}