import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { GetDeviceComponent } from './get-device/get-device.component';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchDeviceComponent } from './search-device/search-device.component';

const dashboardRoutes = [
  { path: 'adddevice', component: AddDeviceComponent },
  { path: 'getdevice', component: GetDeviceComponent },
  { path: 'searchdevice', component: SearchDeviceComponent },
];

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: dashboardRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  SignupComponent,
  DashboardComponent,
];
