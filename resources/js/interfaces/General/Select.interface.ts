export interface Select
{
    id: number | string;
    text: string;
    childID: number | string;
    parentID?: number;
    children?: Select[]
}