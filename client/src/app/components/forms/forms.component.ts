import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { SubmitFormService } from '../../services/submit-form.service';
import { User} from '../../model';
import { Position } from '../../model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../../components/modal/modal.component';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  private myForm: FormGroup;
  public signature: Position[];
  public classifications: string[] = ['Freshman', 'Sophomore', 'Junior', 'Senior'];




  constructor(private formBuilder: FormBuilder, private sf: SubmitFormService, public modal: MatDialog) { }

    openDialog(): void {
      const dialogRef = this.modal.open(ModalComponent);
      dialogRef.afterClosed().subscribe(result => {
      });
    }

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

  onCreate() {
    this.modal.open(ModalComponent);
  }
}
