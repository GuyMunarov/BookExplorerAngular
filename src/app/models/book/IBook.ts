import { IAccessInfo } from "./IAccessInfo";
import { ISaleInfo } from "./ISaleInfo";
import { ISearchInfo } from "./ISearchInfo";
import { IVolumeInfo } from "./IVolumeInfo";

    export interface IBook {
        kind: string;
        id: string;
        etag: string;
        selfLink: string;
        volumeInfo: IVolumeInfo;
        saleInfo: ISaleInfo;
        accessInfo: IAccessInfo;
        searchInfo: ISearchInfo;
    }

    



