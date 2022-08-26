import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, ReplaySubject, scan, shareReplay, Subject, tap } from 'rxjs';
import { IBook } from '../models/book/IBook';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishList$: Observable<IBook[]> | undefined;

  private wishList = new BehaviorSubject<IBook[]>([]);

  constructor() {
    this.wishList$ = this.wishList.asObservable()
    .pipe(
      tap(console.log),
      shareReplay(1)
      );
   }

   getIsBookInWishlist(book: IBook){
    return this.wishList$?.pipe(
      map(wishlist => wishlist.findIndex(item => item.id == book.id) != -1)
    )
   }

  addToWishList(book: IBook){
    const prevValue = this.wishList.getValue();
    const index = prevValue.findIndex(item => item.id == book.id);
    if(index == -1){
      console.log([...prevValue,book]);
      
      this.wishList.next([...prevValue,book])
    }
  }

  removeFromWishList(book: IBook){
    const val = this.wishList.getValue();
    const index = val.findIndex(item => item.id == book.id);
    if(index != -1){
          val.splice(index,1);
          this.wishList.next(val)
    }
  }
  
}
