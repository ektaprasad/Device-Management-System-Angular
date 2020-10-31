import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterContentInit {
  //@Input() isLoggedIn: any;

  public loggedIn: any = false;
  public isLoggedIn: any = false;
  constructor(public authService: LoginService) {}
  ngOnInit(): void {
    //this.isLoggedIn = this.authService.isLoggedIn;
  }
  onLogout() {
    this.authService.logout();
  }
  ngAfterContentInit() {
    this.loggedIn = localStorage.getItem('isLoggedIn');
    console.log(`before if ${this.isLoggedIn}`);
    console.log(`logged in= ${this.loggedIn}`);
    if (this.loggedIn == 'true') {
      this.isLoggedIn = true;
    }
    console.log(`after if ${this.isLoggedIn}`);
  }
}
