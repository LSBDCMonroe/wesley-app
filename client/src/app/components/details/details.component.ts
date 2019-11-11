import { Component, Output, Input, OnChanges, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import { User} from '../../model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnChanges {
  @Input() user$: Observable< User | any>;
  @Input() loading: boolean;
  constructor() { 

    console.log(this.user$)
  }

  ngOnChanges() {

  }


}
