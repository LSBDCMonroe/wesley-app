import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
 
  }
  changePage() {
    this.router.navigate(['home']);
  }

}
