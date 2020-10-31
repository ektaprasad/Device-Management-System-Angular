import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/register';
  doRegistration(bodydata) {
    return this.http.post(`${this.url}`, bodydata);
  }
}
