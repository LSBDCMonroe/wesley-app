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
  user$: Observable< User | any>;
  loading: boolean;
  constructor(private submit: SubmitFormService) { }

  ngOnChanges() {
    this.loading = true;
    this.submit.searchUser(this.email).subscribe((res: any) => {
      if (res.sucess) {
        this.user$ = res.user;
      } else {
        this.user$ = null;
      }
      this.loading = false;
  
    });
  }
  
  undoGotEmailFun() {
     this.undoGotEmail.emit(false);
  }


}
