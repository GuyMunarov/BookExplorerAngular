import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class NegateAuthGuard implements CanActivate {

  constructor(private authGuard: AuthGuard){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return !this.authGuard.canActivate(route,state);
  
    }
}