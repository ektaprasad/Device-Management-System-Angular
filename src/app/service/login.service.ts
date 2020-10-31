import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private token: string;
  private isAuthenticated = false;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) {}
  getToken() {
    return this.token;
  }
  getIsAuth() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  private url = 'http://localhost:3000/login';
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  doLogin(bodydata) {
    return this.http.post<{ token: string; expiresIn: number }>(
      `${this.url}`,
      bodydata
    );
  }
  logout() {
    this.loggedIn.next(false);
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next();
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    // sessionStorage.removeItem('loggedUser');
    // sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiratiom', expirationDate.toISOString());
  }
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }
  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
    };
  }
  goAuth(response) {
    const token = response.token;
    this.token = token;
    if (token) {
      const expiresInDuration = response.expiresIn;
      this.setAuthTimer(expiresInDuration);
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
      const now = new Date();
      const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
      console.log(expirationDate);
      this.saveAuthData(token, expirationDate);
    }
  }
  private setAuthTimer(duration: number) {
    console.log('Setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }
}
