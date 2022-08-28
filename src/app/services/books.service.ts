import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {debounceTime, map, shareReplay, tap} from 'rxjs/operators';
import { IBookResponse } from '../models/book/IBookCollection';
import { BookRequestParams } from '../models/BookRequestParams';
import { BehaviorSubject, interval, of } from 'rxjs';
import { IBook } from '../models/book/IBook';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private BASE_URL = environment.BOOK_API_BASE_URL;

  private bookCache = new BehaviorSubject<{key: string,skip: string, books: IBookResponse}[]>([]);
  private cacheClear$ = interval(300000)
                .pipe(
                  tap(()=> this.bookCache.next([])));


  constructor(private httpClient: HttpClient) {
    this.cacheClear$.subscribe()
   }


  getBooks(reqParams: BookRequestParams){

    const params = new HttpParams()
    .set('maxResults',reqParams.take!.toString())
    .set('startIndex',reqParams.skip!.toString())
    .set('q',`intitle:${reqParams.query!.toString()}`);
    
    const lastCacheIndex = this.findCacheIndex(reqParams);
    if(lastCacheIndex != -1){
      return this.getFromCacheByIndex(lastCacheIndex)
    }

    return this.httpClient.get<IBookResponse>(this.BASE_URL,{params: params})
    .pipe(
      tap(bookRes => this.addToCache(reqParams,bookRes)),
      shareReplay(1)
    );
  }


  private findCacheIndex(reqParams: BookRequestParams){
    const currentCache = this.bookCache.getValue();
    const lastCacheIndex = currentCache.findIndex(x => x.key == reqParams.query && x.skip == reqParams.skip);
    return lastCacheIndex;
  }

  private getFromCacheByIndex(lastCacheIndex: number){
    const currentCache = this.bookCache.getValue();
    return  of(currentCache[lastCacheIndex].books);
  }
  private addToCache(reqParams: BookRequestParams,bookRes: IBookResponse){
    const currentCache = this.bookCache.getValue();
    this.bookCache.next([...currentCache, {key: reqParams.query!, skip:reqParams.skip!, books: bookRes}])
  }
}
