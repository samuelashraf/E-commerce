import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  busyRequestsCount = 0;
  constructor(private spinnerser: NgxSpinnerService) {}
  busy() {
    this.busyRequestsCount++;
    this.spinnerser;
    this.spinnerser.show(undefined, {
      type: 'ball-scale-ripple',
      bdColor: 'rgba(0,0,0,0.999)',
      color: '#fff',
      size: 'default',
    });
  }
  idle() {
    this.busyRequestsCount--;
    if (this.busyRequestsCount <= 0) {
      this.busyRequestsCount = 0;
      this.spinnerser.hide();
    }
  }
}
