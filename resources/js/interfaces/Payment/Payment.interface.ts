import { Product } from "@interface/Product/Product.interface";
import { Debt } from "./Debt.interface";

export interface Payment
{
    id: number;
    created_by: number;
    updated_by: number;
    charged_by: number;
    paymentmethod_id: number;
    branch_id: number;
    discount: number;
    total: number;
    credit_card: string;
    paymentstatus_id: number;
    patient_id: number;
    created_at: string;
    updated_at: string;
    last_debt_payment?: Debt,
    products?: Product[]
}