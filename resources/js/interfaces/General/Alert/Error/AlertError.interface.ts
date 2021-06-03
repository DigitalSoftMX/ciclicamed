import { ErrorData } from "./ErrorData.interface";

export interface AlertError
{
    errors: {
        [key: string] : ErrorData
    }
}