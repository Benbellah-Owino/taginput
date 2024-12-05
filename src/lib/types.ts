export enum TextMode{
    VALUE,
    COLUMN
}

export type Row = {
    [key:string]: string|number|null,
    id: number,
    column:string,
    value: string|null,
}