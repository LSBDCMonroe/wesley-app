import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model';
@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {
 apiUrl = 'http://localhost/api';
 headers = new HttpHeaders({ 'Content-Type': 'application/json'})
  constructor( private http: HttpClient) { }

submitUser(user: User): Observable<any> {
  const { firstName, lastName, email, classification, signature } = user;
  console.log(user.email);
  const headers: HttpHeaders = this.headers;
  return this.http.post(`${this.apiUrl}/register`, JSON.stringify({ firstName, lastName, email, classification , signature}), 
  { headers });
}

searchUser(email: string){
  const headers: HttpHeaders = this.headers;
  return this.http.post(`${this.apiUrl}/search-user`, JSON.stringify({ email}),
  { headers });
}

addVisit(email: string,  equipment : string){
  const headers: HttpHeaders = this.headers;
  return this.http.post(`${this.apiUrl}/add-visit`, JSON.stringify({ email,  equipment}),
  { headers });
}

}
