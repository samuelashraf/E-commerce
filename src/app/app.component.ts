import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Elso2';
}
