import { ProductData } from "@data/Product/Product.data";
import { Payment } from "@interface/Payment/Payment.interface";
import { DebtData } from "./Debt.data";

export const PaymentData: Payment = {
    id: -1,
    created_by: -1,
    updated_by: -1,
    charged_by: -1,
    paymentmethod_id: -1,
    branch_id: -1,
    discount: -1,
    total: -1,
    credit_card: '',
    paymentstatus_id: -1,
    patient_id: -1,
    created_at: '',
    updated_at: '',
    last_debt_payment: DebtData,
    products: [ProductData]
}