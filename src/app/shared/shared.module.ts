
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    
  ],
  imports: [
    MatProgressSpinnerModule,
    MatDialogModule,
    
  ],
  exports: [
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class SharedModule { }
