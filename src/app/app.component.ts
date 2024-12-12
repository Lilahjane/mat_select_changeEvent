import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    
    NavComponent
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mat_select_changeEvent';
}
