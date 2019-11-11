import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { SubmitFormService } from '../../services/submit-form.service';
import { User} from '../../model';
import { Position } from '../../model'
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'scale(1)'
      })),
      state('closed', style({
        transform: 'scale(0)'
      })),
      transition('open => closed', [
        animate('.8s')
      ]),
      transition('closed => open', [
        animate('.8s')
      ]),
    ]),
  ],
})
export class FormsComponent implements OnInit {
  @Input() stepper;
  @Output() user$ = new EventEmitter<any>();
  private myForm: FormGroup;
  private isOpen = false;
  public signature: Position[];
  public classifications: string[] = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'None'];

  constructor(private formBuilder: FormBuilder, private sf: SubmitFormService, public modal: MatDialog) { }

    openDialog(): void {
      const dialogRef = this.modal.open(ModalComponent);
      dialogRef.afterClosed().subscribe(result => {
      });
    }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName : ['', [ Validators.required, Validators.pattern(/^[a-zA-Z]{2,20}$/)]],
      lastName : ['', [ Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]{2,20}$/)]],
      email: ['', [ Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]],
      phone: ['', [ Validators.required]],
      classification: ['', [ Validators.required]]
    });

    setTimeout(() => this.toggle(), 100);
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

  get phone() {
    return this.myForm.get('phone');
  }


  submit() {
    const firstName: string = this.myForm.controls.firstName.value;
    const lastName: string = this.lastName.value;
    const email: string = this.email.value;
    const classification: number = this.classification.value;
    const phone: number = this.phone.value;
    const signature: Position[] = this.signature;
    const user: User = {firstName, lastName, email, signature, classification};

    if (this.signature !== undefined || this.myForm.status === 'VALID') {
        this.sf.submitUser(user).subscribe((res: any) =>  {
          if (res.success){
          this.user$.emit(res.user);
          this.goForward(this.stepper);
        }
        });
    } else { alert(this.signature !== undefined ? 'Input Your Signature' : 'Invalid Input'); }
  }

  getLines($event) {
    this.signature = $event;
  }

  onCreate() {
    this.modal.open(ModalComponent);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
  goForward(stepper) {
    stepper.next();
}
}
