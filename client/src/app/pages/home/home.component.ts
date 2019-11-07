import { Component, OnInit } from '@angular/core';
import { User } from '../../model';
import { SubmitFormService } from '../../services/submit-form.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hasRegistered: boolean;
  user: User;
  gotUser = false;
  formGroup: FormGroup;
  constructor(private submit: SubmitFormService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: ['', [ Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]]
    })
  }

  setStatus(value: boolean | any) {
    this.hasRegistered = value;
  }

  get email() {
    return this.formGroup.get('email');
  }

  searchUser(stepper: MatStepper) {
    this.gotUser = true;
    if (this.formGroup.status === 'VALID') {
      this.submit.searchUser(this.email.value).subscribe(res => console.log(res));
      this.goForward(stepper);
    } else {
      alert('Invalid Details');
    }
  }
  goForward(stepper: MatStepper) {
    stepper.next();
}

  resetUser() {
    this.gotUser = false;
    this.user = null;
  }

  ConfirmUser() {
    this.gotUser = false;
    this.user = null;
  }


}
