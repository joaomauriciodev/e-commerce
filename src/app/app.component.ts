import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormNewAdComponent } from './pages/form-new-ad/form-new-ad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormNewAdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';
}
