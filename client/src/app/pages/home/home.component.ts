import { Component, OnInit } from '@angular/core';
import { User } from '../../model';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hasRegistered: boolean;
  gotEmail = false;
  confirmEmail = false;
  user$: any;

  formGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

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
    if (this.formGroup.status === 'VALID') {
      this.gotEmail = true;
     // this.submit.searchUser(this.email.value).subscribe(res => console.log(res));
     stepper.next();
    } else {
      alert('Invalid Details');
    }
  }

  goForward(stepper: MatStepper) {
    this.gotEmail = true;
    stepper.next();
}
  setGotEmail(bool: boolean){
      this.gotEmail = bool;
  }

  setUser(user: any){
    this.user$ = user;
}
}
