import { Component, OnInit,ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, debounceTime, map, Observable, pipe, Subscription, tap,distinctUntilChanged } from 'rxjs';
import { IBook } from 'src/app/models/book/IBook';
import { BookRequestParams } from 'src/app/models/BookRequestParams';
import { AuthService } from '../../services/auth-service.service';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit, OnDestroy {

  books$!: Observable<IBook[]>;
  bookCount$ = new BehaviorSubject<number>(0);
  valueChaged$: Subscription | undefined;
  currentPage = new BehaviorSubject<number>(1);


  form = this.fb.group({
    search: ["",[Validators.required]]
  });

  constructor(private fb: FormBuilder, private booksService: BooksService,public authService: AuthService,private cdt: ChangeDetectorRef) {
    this.loadBooks();
   }


  

  ngOnInit(): void {
    this.valueChaged$ = this.form.controls.search.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => {
        this.loadBooks()
        this.cdt.markForCheck()
      }),
    ).subscribe();
    
  }

  pageChanged(page: number){

    this.currentPage.next(page);
    const params = new BookRequestParams({skip: page * 20 -20, take: 20});
    this.loadBooks(params)
  }
  
  loadBooks(params?: BookRequestParams){

    if(params){
      params.query = this.getQueryValueToSendOrDefault();
    }
    else{
      params = new BookRequestParams({skip:0, take: 20,query: this.getQueryValueToSendOrDefault()})
    }

    this.books$ = this.booksService.getBooks(params)
    .pipe(
      tap(bookResponse => this.bookCount$.next(bookResponse.totalItems)),
      map(bookResponse => bookResponse.items)
    );
  }


  getQueryValueToSendOrDefault(){
    let valToSend: string = this.form.value.search!;
    if(!this.form.value.search){
      valToSend = 'israel';
    }
    return valToSend;
  }

  ngOnDestroy(): void {
    this.valueChaged$?.unsubscribe();
  }
}
