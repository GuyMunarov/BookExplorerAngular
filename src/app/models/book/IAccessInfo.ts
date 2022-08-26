import { IEpub } from "./IEpub";
import { IPdf } from "./IPdf";

export interface IAccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: IEpub;
    pdf: IPdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}