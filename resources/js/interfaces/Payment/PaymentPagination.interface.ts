import { Pagination } from "@interface/General/Pagination.interface";
import { Payment } from "./Payment.interface";

export interface PaymentPagination
{
    pagination: Pagination,
    data: Payment[]
}