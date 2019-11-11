import { Component, Output, Input, OnChanges, EventEmitter} from '@angular/core';
import { SubmitFormService } from '../../services/submit-form.service';
import {Observable} from 'rxjs';
import { User} from '../../model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnChanges {
  @Input() email: string;
  @Output() undoGotEmail = new EventEmitter<boolean>();
  @Output() user = new EventEmitter<any>();
  user$: Observable< User | any>;
  status = {
    loading: false,
    completed: false,
    error: false
  };
  constructor(private submit: SubmitFormService) { }

  ngOnChanges() {
    this.status = {
      loading: true,
      completed: false,
      error: false
    };
    this.user$ = null;
    this.submit.searchUser(this.email).subscribe((res: any) => {
      if (res.success) {
        this.user$ = res.user;
        this.sendUser();
        this.status.completed = true;
      } 
      this.status.loading = false;
    },
    (err: any) => {this.status.error = true; this.status.loading = false;},
    () => this.status.loading = false);
  }
  
  undoGotEmailFun() {
     this.undoGotEmail.emit(false);
  }

  sendUser() {
      this.user.emit(this.user$);
   }


}
