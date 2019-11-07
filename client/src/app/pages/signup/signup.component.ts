import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  completed: boolean;
  constructor() { }

  ngOnInit() {
    this.completed = false;
  }
  goForward(stepper: MatStepper) {
    stepper.next();
}

}
