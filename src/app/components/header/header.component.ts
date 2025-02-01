import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private _router: Router) {}
  routPro() {
    this._router.navigateByUrl('/order');
  }
  routCart() {
    this._router.navigate(['cart']);
  }
}
