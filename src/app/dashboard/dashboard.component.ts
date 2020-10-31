import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  userDisplayName = '';
  ngOnInit(): void {
    this.userDisplayName = sessionStorage.getItem('loggedUser');
  }
}
