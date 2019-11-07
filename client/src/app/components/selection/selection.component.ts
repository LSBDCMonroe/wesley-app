import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Input() nextStep: any;
  select;
  selector = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  emmit(bool: boolean) {
    this.confirm.emit(bool);
    this.nextStep();
  }

}
