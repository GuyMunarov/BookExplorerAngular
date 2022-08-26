import { Component, OnInit, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IBook } from 'src/app/models/book/IBook';
import { AuthService } from 'src/app/services/auth-service.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistPageComponent implements OnInit {

  isWishListEmpty$: Observable<boolean> | undefined;

  constructor(public wishListService: WishlistService, private router:Router, public authService: AuthService) {
    
    this.isWishListEmpty$ = wishListService.wishList$?.pipe(
      map(wishList => !wishList || !wishList.length)
    );
  
  }

  navigateToSearch(){
    this.router.navigateByUrl('/search');
  }

  ngOnInit(): void {
  }

}
