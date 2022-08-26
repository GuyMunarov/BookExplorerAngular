import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {debounceTime, map, shareReplay} from 'rxjs/operators';
import { IBookResponse } from '../models/book/IBookCollection';
import { BookRequestParams } from '../models/BookRequestParams';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  BASE_URL = environment.BOOK_API_BASE_URL;

  constructor(private httpClient: HttpClient) { }


  getBooks(reqParams: BookRequestParams){

    const params = new HttpParams()
    .set('maxResults',reqParams.take!.toString())
    .set('startIndex',reqParams.skip!.toString())
    .set('q',reqParams.query!.toString());

    return this.httpClient.get<IBookResponse>(this.BASE_URL,{params: params})
    .pipe(
      shareReplay(1) // ref something
    );
    
  }
}
