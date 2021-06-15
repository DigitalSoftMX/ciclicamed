import { PaymentMethod } from "./PaymentMethod.interface";

export interface Debt
{
    payment_id: number;
    description: string;
    total: number;
    missing_payment: number;
    paymentmethod_id: number;
    charged_by: number;
    credit_card: string;
    created_at: string;
    updated_at: string;
    payment_method?: PaymentMethod
}