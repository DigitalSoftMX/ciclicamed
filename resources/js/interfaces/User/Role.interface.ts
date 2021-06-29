export interface Role
{
    created_at: string;
    guard_name: string;
    id: number;
    name: string;
    pivot: {
        model_id: number;
        model_type: string;
        role_id: number;
    }
    updated_at: string;
}