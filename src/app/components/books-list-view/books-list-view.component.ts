import { Component, Input, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { IBook } from 'src/app/models/book/IBook';
import { WishListDialogComponent } from '../wish-list-dialog/wish-list-dialog.component';

@Component({
  selector: 'app-books-list-view',
  templateUrl: './books-list-view.component.html',
  styleUrls: ['./books-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListViewComponent implements OnInit {

  @Input() books: Observable<IBook[]> | undefined;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openWishlist(book:IBook){

    const dialog = this.dialog.open(WishListDialogComponent);
    dialog.componentInstance.book = book;

    dialog.componentInstance.isModalOpen.pipe(
      tap((isOpen)=> {
        if(!isOpen)
          this.dialog.closeAll();
      })
    ).subscribe();
  }
}
