import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { BusyService } from '../services/busy.service';
import { delay, finalize } from 'rxjs';

export const lodingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyservice = inject(BusyService);
  busyservice.busy();
  return next(req).pipe(
    delay(2000),
    finalize(() => busyservice.idle())
  );
};
