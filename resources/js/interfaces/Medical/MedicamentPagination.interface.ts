import { Pagination } from "@interface/General/Pagination.interface";
import { Medicament } from "./Medicament.interface";

export interface MedicamentPagination
{
    pagination: Pagination,
    data: Medicament[]
}