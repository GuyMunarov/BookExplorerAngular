import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  
  @Input()
  disabled?: boolean;

  @Input()
  btnType?: string //primary, danger;

  @Output() 
  clicked = new EventEmitter<void>();

  constructor() { }

  handleClick(){
    this.clicked.emit();
  }

  ngOnInit(): void {
  }

}
