import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../service/device.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css'],
})
export class AddDeviceComponent implements OnInit {
  constructor(private addDevice: DeviceService, private router: Router) {}
  addDeviceForm: FormGroup;
  public res: any = [];
  private token: string;
  device = { deviceName: '', os: '', imei: '', extraInfo: '' };
  ngOnInit(): void {
    this.addDeviceForm = new FormGroup({
      deviceName: new FormControl(this.device.deviceName, [
        Validators.required,
      ]),
      os: new FormControl(this.device.os, [Validators.required]),
      imei: new FormControl(this.device.imei, [Validators.required]),
      extraInfo: new FormControl(this.device.extraInfo, []),
    });
  }
  get f() {
    return this.addDeviceForm.controls;
  }
  addNewDevice(deviceName, os, imei, extraInfo) {
    this.addDevice
      .performAddDevice({
        deviceName: deviceName.value,
        os: os.value,
        imei: imei.value,
        extraInfo: extraInfo.value,
      })
      .subscribe(
        (data) => {
          this.addDeviceForm.reset({
            deviceName: '',
            os: '',
            imei: '',
            extraInfo: '',
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
