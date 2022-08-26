import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { IBook } from 'src/app/models/book/IBook';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent implements OnInit {

  @Input() book: IBook | undefined;
  @Output() buttonClicked = new EventEmitter<IBook>();

  constructor() { }
  
  onBtnClicked(){
    this.buttonClicked.emit(this.book);
  }

  ngOnInit(): void {
  }

}
