import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-device',
  templateUrl: './search-device.component.html',
  styleUrls: ['./search-device.component.css'],
})
export class SearchDeviceComponent implements OnInit {
  public list: any = [];
  constructor(private search: SearchService, private toastr: ToastrService) {}
  ngOnInit(): void {}
  performSearchDevice(deviceName) {
    this.search
      .searchDevice({
        keyword: deviceName.value,
      })
      .subscribe(
        (result) => {
          this.list = result;
        },
        (error) => {
          this.toastr.error('Something went wrong');
        }
      );
  }
}
