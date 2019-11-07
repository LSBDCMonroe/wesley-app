import { Component, Output, Input, OnChanges, EventEmitter} from '@angular/core';
import { SubmitFormService } from '../../services/submit-form.service';
import {Observable} from 'rxjs';
import { User} from '../../model';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnChanges {
  @Input() email: string;
  @Output() undoGotEmail = new EventEmitter<boolean>();
   user$: Observable<any>;


  constructor(private submit: SubmitFormService) { }

  ngOnChanges() {
    this.submit.searchUser(this.email).subscribe((res: any) => {
      if(res.sucess){
        this.user$ = res.user;
        console.log(this.user$)
      }
      console.log(res);
    });
  }
  
  undoGotEmailFun(){
     this.undoGotEmail.emit(false);
  }


}
