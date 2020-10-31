import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/deviceSearch';
  searchDevice(bodydata) {
    return this.http.post(`${this.url}`, bodydata);
  }
}
