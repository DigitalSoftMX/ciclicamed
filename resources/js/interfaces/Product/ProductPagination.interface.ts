import { Pagination } from "../other/Pagination.interface";
import { Product } from "./Product.interface";

export interface ProductPagination
{
    pagination: Pagination;
    data: Product[]
}