import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/devices';
  performAddDevice(bodydata) {
    return this.http.post(`${this.url}`, bodydata);
  }
  performGetDevice() {
    return this.http.get(`${this.url}`);
  }
  updateStatus(bodydata, id) {
    return this.http.put(`${this.url}/${id}`, bodydata);
  }
}
