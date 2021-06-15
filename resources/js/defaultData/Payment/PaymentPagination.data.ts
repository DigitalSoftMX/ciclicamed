import { PaginationData } from "@data/General/Pagination.data";
import { PaymentPagination } from "@interface/Payment/PaymentPagination.interface";
import { PaymentData } from "./Payment.data";

export const PaymentPaginationData: PaymentPagination = {
    pagination: PaginationData,
    data: [
        PaymentData
    ]
}