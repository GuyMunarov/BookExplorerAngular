import { IImageLinks } from "./IImageLinks";
import { IIndustryIdentifier } from "./IIndustryIdentifier";
import { IPanelizationSummary } from "./IPanelizationSummary";
import { IReadingModes } from "./IReadingModes";

export interface IVolumeInfo {
    title: string;
    authors: string[];
    publishedDate: string;
    industryIdentifiers: IIndustryIdentifier[];
    readingModes: IReadingModes;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: IPanelizationSummary;
    imageLinks: IImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}
