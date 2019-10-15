import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { SubmitFormService } from '../../services/submit-form.service';
import { User} from '../../model';
import { Position } from '../../model'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  animations: [
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
  ]
})
export class FormsComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private sf: SubmitFormService) { }
  public signature: Position[];
  public classifications: string[] = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName : ['', [ Validators.required, Validators.minLength(2)]],
      lastName : ['', [ Validators.required, Validators.minLength(2)]],
      email: ['', [ Validators.required, Validators.minLength(5)]],
      classification: ['', [ Validators.required]]
    });
  }

  get firstName() {
    return this.myForm.get('firstName');
  }

  get lastName() {
    return this.myForm.get('lastName');
  }

  get email() {
    return this.myForm.get('email');
  }
  get classification() {
    return this.myForm.get('classification');
  }

  submit() {
    const firstName: string = this.myForm.controls.firstName.value;
    const lastName: string = this.lastName.value;
    const email: string = this.email.value;
    const classification: number = this.classification.value;
    const signature: Position[] = this.signature;
    this.sf.submitUser({firstName, lastName, email, signature, classification}).subscribe((res)=>console.log(res));
  }

  getLines($event) {
    this.signature = $event;
  }

}
