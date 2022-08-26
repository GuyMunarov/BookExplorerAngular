export class BookRequestParams{
    query: string | undefined;
    skip: string | undefined;
    take: string | undefined;

    constructor(params: any){
        Object.assign(this,params)
    }
}