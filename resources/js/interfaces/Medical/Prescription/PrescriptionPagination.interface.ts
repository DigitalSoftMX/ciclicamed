import { Pagination } from "@interface/General/Pagination.interface";
import { Consult } from "../Consult.interface";

export interface PrescriptionPagination
{
    pagination: Pagination,
    data: Consult[]
}