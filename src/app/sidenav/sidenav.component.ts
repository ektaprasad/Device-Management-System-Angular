import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/sidenav.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  constructor(private router: Router) {}
  public activeLi: string = '';
  // public isLoggedIn=false;
  // public loggedIn ;
  ngOnInit(): void {
    // this.loggedIn = localStorage.getItem('isLoggedIn');
    // if(this.loggedIn == 'true'){
    //   this.isLoggedIn = true
    // }
  }
  getDevices() {
    this.router.navigate(['dashboard/getdevice']);
    //this.router.navigateByUrl(listDevices.path);
  }
  addDevices() {
    this.router.navigate(['dashboard/adddevice']);
  }
  searchDevices() {
    this.router.navigate(['dashboard/searchdevice']);
  }
}
