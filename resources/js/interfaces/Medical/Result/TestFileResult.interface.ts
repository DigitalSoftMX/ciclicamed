export interface TestFileResult
{
    type: string;
    files: {
        [key: string]: string
    }[]
}