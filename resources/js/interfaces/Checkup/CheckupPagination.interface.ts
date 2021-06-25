import { Pagination } from "@interface/General/Pagination.interface";
import { Checkup } from "./Checkup.interface";

export interface CheckupPagination
{
    pagination: Pagination,
    data: Checkup[]
}