import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {  FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomePageComponent implements OnInit {

  form = this.fb.group({
    username: new FormControl<string>('',[Validators.required])
  });

  constructor(private fb: NonNullableFormBuilder,private authService: AuthService,private router: Router) { 
  }

  ngOnInit(): void {
  }


  login(){
      this.authService.login(this.form.value.username as string);
      this.router.navigateByUrl('/search');
    }



}
