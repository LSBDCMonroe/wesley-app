import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { SubmitFormService } from '../../services/submit-form.service';
import { User} from '../../model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName : ['', [ Validators.required, Validators.minLength(2)]],
      lastName : ['', [ Validators.required, Validators.minLength(2)]],
      email: ['', [ Validators.required, Validators.minLength(5)]]
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

}
