import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl = 'http://localhost/api';
  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-all-users`);
  }
}
