import { Debt } from "@interface/Payment/Debt.interface";
import { PaymentMethodData } from "./PaymenMethod.data";

export const DebtData: Debt = {
    id: -1,
    payment_id: -1,
    description: '',
    total: 0,
    missing_payment: 0,
    paymentmethod_id: -1,
    charged_by: -1,
    credit_card: '',
    created_at: '',
    updated_at: '',
    payment_method: PaymentMethodData
}