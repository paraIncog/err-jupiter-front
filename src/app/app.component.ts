import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentRowComponent } from './components/content-row/content-row.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContentRowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'err-jupiter-front';
}
