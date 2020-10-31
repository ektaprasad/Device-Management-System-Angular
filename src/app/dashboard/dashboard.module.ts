import { AddDeviceComponent } from '../add-device/add-device.component';
import { GetDeviceComponent } from '../get-device/get-device.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [AddDeviceComponent, GetDeviceComponent, SidenavComponent],
  exports: [AddDeviceComponent, GetDeviceComponent, SidenavComponent],
  providers: [],
  bootstrap: [DashboardComponent],
})
export class DashboardModule {}
