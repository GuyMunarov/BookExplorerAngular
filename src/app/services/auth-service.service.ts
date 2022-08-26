import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<string | null> | undefined;
  private user: BehaviorSubject<string | null> =  new BehaviorSubject<string | null>(null);
  
  constructor() {
    this.user$ = this.user.asObservable()
    .pipe(
      shareReplay(1)
      );
   }

   login(username:string){
    this.user.next(username);
   }

   logout(){
    this.user.next(null);
   }

   

  

}
