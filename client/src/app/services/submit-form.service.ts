import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model';
@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {
 apiUrl = '';
  constructor( private http: HttpClient) { }

submitUser(user: User): Observable<any> {
  const { firstName, lastName, email, classification } = user;
  console.log(user);
  return this.http.post(this.apiUrl, { firstName, lastName, email, classification }, {headers: {}});
}

}
