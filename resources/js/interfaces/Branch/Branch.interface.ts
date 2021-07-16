import { BranchStatus } from "./BranchStatus.interface";

export interface Branch
{
    id: number;
    name: string;
    address?: string;
    phone?: string;
    branchstatus_id?: number;
    created_at?: string;
    updated_at?: string;
    status?: BranchStatus;
}