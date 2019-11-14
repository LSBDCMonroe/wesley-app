import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model';

interface Request {
  success: true;
  Users?: [User | any];
 }

 
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl = 'http://localhost/api';
  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<any> {
   // return this.http.get(`${this.apiUrl}/get-all-users`).pipe(map((response: any) => response.json()));

    return this.http.get(`${this.apiUrl}/get-all-users`);
  }
}
