import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { AuthGuard } from './guards/auth.guard';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';

const routes: Routes = [
 
  {path: 'welcome',
  component: WelcomePageComponent,
  pathMatch:"full"
  },
  {
  path: 'search', 
  component: SearchPageComponent, 
  pathMatch:"full", 
  canActivate: [AuthGuard]
  },
  {
    path: 'wishList', 
    component: WishlistPageComponent, 
    pathMatch:"full", 
    canActivate: [AuthGuard]
    },
  {path: '',
  redirectTo: 'welcome',
  pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
