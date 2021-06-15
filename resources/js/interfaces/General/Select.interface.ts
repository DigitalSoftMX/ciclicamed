export interface Select
{
    id: number;
    text: string;
    childID: number;
    parentID?: number;
    children?: Select[]
}