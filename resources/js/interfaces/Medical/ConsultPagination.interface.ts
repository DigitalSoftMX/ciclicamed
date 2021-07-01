import { Pagination } from "@interface/General/Pagination.interface";
import { Consult } from "./Consult.interface";

export interface ConsultPagination
{
    pagination: Pagination,
    data: Consult[]
}