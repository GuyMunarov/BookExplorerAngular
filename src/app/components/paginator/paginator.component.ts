import { Component, OnInit,ChangeDetectionStrategy, Input,Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnInit {

  @Input()
  recordsPerPage!: number;

  @Input()
  recordCount!: number | null;

  @Output()
  pageChanged = new EventEmitter<number>();

  @Input()
  page!: number | null;

  totalPages!: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.page);
    
    if(this.recordCount){
      this.totalPages = Math.trunc(this.recordCount / this.recordsPerPage);
      if(this.recordCount % this.recordsPerPage != 0){
        this.totalPages++;
      }
    }
  }


  pageClicked(page: number){
    this.pageChanged.emit(page);
  }

  createRange(number: number){
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

}
