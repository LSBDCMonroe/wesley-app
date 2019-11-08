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
  selector = new FormControl({type : ''});
  constructor() { }

  ngOnInit() {
  }

  emmit(bool: boolean) {
    this.confirm.emit(bool);
    this.nextStep();
  }

  get type(){
    return this.selector.get('type');
  }
  display(){
    console.log(this.type.value);
  }

}
