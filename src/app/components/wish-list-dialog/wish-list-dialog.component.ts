import { DialogConfig } from '@angular/cdk/dialog';
import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IBook } from 'src/app/models/book/IBook';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wish-list-dialog',
  templateUrl: './wish-list-dialog.component.html',
  styleUrls: ['./wish-list-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishListDialogComponent implements OnInit {

  
  book: IBook | undefined;
  wishList: Observable<IBook[]> | undefined;
  isBookInWishlist: Observable<boolean> | undefined;
  isModalOpen = new BehaviorSubject<boolean>(true);

  constructor(private wishlistService: WishlistService) {
    this.wishList = wishlistService.wishList$;
   }

  ngOnInit(): void {  
    this.isBookInWishlist = this.wishlistService.getIsBookInWishlist(this.book as IBook);

  }

  addToWishlist(){
    if(this.book)
        this.wishlistService.addToWishList(this.book);
        this.isModalOpen.next(false)
  }
  removeFromWishlist(){
    if(this.book)
        this.wishlistService.removeFromWishList(this.book);
        this.isModalOpen.next(false)

  }
}
