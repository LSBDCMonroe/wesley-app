import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubmitFormService } from '../../services/submit-form.service';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  @Input() user$: any;
  selection = new FormControl('');
  status = {
    loading: false,
    submitted: false,
    error: false
  }
  
  constructor(private sf: SubmitFormService) { }

  ngOnInit() {
  }

  submitForm() {
    this.status.loading = true;
    this.sf.addVisit(this.user$.email, this.selection.value).subscribe((res: any) => {
      if (res.success) {
        this.status.submitted = true;
      }
    }, (err: any) => {
      this.status.error = true;
    }, () => {
      this.status.loading = false;
    });
  }

}
