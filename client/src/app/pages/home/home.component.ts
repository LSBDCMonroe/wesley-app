import { Component, OnInit } from '@angular/core';
import { User } from '../../model';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { SubmitFormService } from '../../services/submit-form.service';
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

  // condition: {
  //   user: null,
  //   hasRegistered: null,
  //   gotEmail: false,
  //   confirmEmail: false
  // }
  status = {
    step: 0,
    error: false,
    success: false,
    loading: false
  };

  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private sf: SubmitFormService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: ['', [ Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]]
    })
  }

  setStatus(value: boolean ) {
    this.hasRegistered = value;
  }

  get email() {
    return this.formGroup.get('email');
  }

  searchUser(stepper: MatStepper) {
    if (this.formGroup.status === 'VALID') {
      this.gotEmail = true;
      this.user$ = null;
      this.status = {
        step: 0,
        loading: true,
        success: false,
        error: false
      };
      this.user$ = null;
      stepper.next();
      this.sf.searchUser(this.email.value).subscribe((res: any) => {
        if (res.success) {
          this.user$ = res.user;
          this.status.success = true;
          console.log(res.user)
        }
        this.status.loading = false;
      },
      (err: any) => {this.status.error = true; this.status.loading = false;},
      () => this.status.loading = false);
    } else {
      alert('Invalid Details');
    }
  }

  setGotEmail(bool: boolean){
      this.gotEmail = bool;
  }

  setUser(user: any) {
    this.user$ = user;
}
}
