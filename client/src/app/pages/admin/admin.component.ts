import { Component, OnInit } from '@angular/core';
import {AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';
import { User } from '../../model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

// interface Request {
//  success: true;
//  users?: [User | any];
// }
export class AdminComponent implements OnInit {
   users: Observable< any>;
   displayedColumns: string[] = ['First Name', 'Last Name', 'Email', 'Number of Visits'];
  
  constructor(private req: AdminService) { }

  ngOnInit() {
    this.req.getAllUsers().subscribe((req:any) => {
      if (req.success) {
      this.users = req.users;
      }
    });
  }

}
