import { IBook } from "./IBook";

export interface IBookResponse {
    kind: string;
    totalItems: number;
    items: IBook[];
}