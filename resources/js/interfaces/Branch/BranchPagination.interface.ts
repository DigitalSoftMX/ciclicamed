import { Pagination } from "@interface/General/Pagination.interface";
import { Branch } from "./Branch.interface";

export interface BranchPagination
{
    pagination: Pagination,
    data: Branch[]
}