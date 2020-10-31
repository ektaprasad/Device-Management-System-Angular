import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../service/device.service';
import { Button } from 'protractor';

@Component({
  selector: 'app-get-device',
  templateUrl: './get-device.component.html',
  styleUrls: ['./get-device.component.css'],
})
export class GetDeviceComponent implements OnInit {
  public data: any = [];
  title = 'available-device';
  public name: any;
  public str: any;
  constructor(private deviceService: DeviceService) {}
  ngOnInit(): void {
    this.getDevices();
  }
  getDevices() {
    this.deviceService.performGetDevice().subscribe(
      (res) => {
        this.data = res;
        console.log(this.data);
      },
      (error) => {
        console.log(error);
        console.log('error');
      }
    );
  }
  updateDevice(isAvailable, id) {
    console.log(`isAvailable ${isAvailable}`);
    this.deviceService
      .updateStatus(
        {
          available: isAvailable ? 'false' : 'true',
        },
        id
      )
      .subscribe(
        (data) => {
          console.log(data);
          console.log('success');
          window.location.reload();
        },
        (error) => {
          console.log(error);
          console.log('error');
        }
      );
  }
}
