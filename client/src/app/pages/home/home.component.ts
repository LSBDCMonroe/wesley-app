import { Component, OnInit } from '@angular/core';
import { User } from '../../model';
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
  constructor() { }

  ngOnInit() {
  }

  setStatus(value: boolean) {
    this.status = value;
  }

  getUser() {
  }

}
