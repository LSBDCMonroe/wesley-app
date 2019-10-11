import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {
 apiUrl = '';
  constructor( private http: HttpClient) { }

submitUser(): Observable<any>{
  return this.http.post(this.apiUrl, {}, {headers: {}});
}

}
