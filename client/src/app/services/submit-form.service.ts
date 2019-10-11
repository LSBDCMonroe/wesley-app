import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model';
@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {
 apiUrl = 'http://localhost:8080/register';
 headers = new HttpHeaders({ 'Content-Type': 'application/json'})
  constructor( private http: HttpClient) { }

submitUser(user: User): Observable<any> {
  const { firstName, lastName, email, classification, signature } = user;
  const headers: HttpHeaders = this.headers;
  return this.http.post(this.apiUrl, JSON.stringify({ firstName, lastName, email, classification , signature}), 
  { headers });
}

}
