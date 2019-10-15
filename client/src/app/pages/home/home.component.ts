import { Component, OnInit } from '@angular/core';
import { User } from '../../model';
import { SubmitFormService } from '../../services/submit-form.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status: boolean;
  user: User;
  email: string;
  gotUser: boolean;
  constructor(private submit: SubmitFormService) { }

  ngOnInit() {
  }

  setStatus(value: boolean) {
    this.status = value;
  }

  searchUser() {
    this.submit.searchUser(this.email).subscribe(res=> console.log(res));
  }

}
