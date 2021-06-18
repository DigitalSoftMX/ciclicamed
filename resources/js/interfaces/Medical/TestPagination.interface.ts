import { Pagination } from "@interface/General/Pagination.interface";
import { Test } from "./Test.interface";

export interface TestPagination
{
    pagination: Pagination;
    data: Test[]
}