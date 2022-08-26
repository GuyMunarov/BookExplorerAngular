import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { BooksListViewComponent } from './components/books-list-view/books-list-view.component';
import { BookCardComponent } from './components/card/book-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from "@angular/material/dialog";
import { WishListDialogComponent } from './components/wish-list-dialog/wish-list-dialog.component';
import { CommaSeperatedPipe } from './pipes/comma-seperated.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { ButtonComponent } from './components/button/button.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SearchPageComponent,
    PaginatorComponent,
    BooksListViewComponent,
    BookCardComponent,
    WishListDialogComponent,
    CommaSeperatedPipe,
    NavbarComponent,
    WishlistPageComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
