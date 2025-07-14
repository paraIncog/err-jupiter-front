import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenreListComponent } from './components/genre-list/genre-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GenreListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'err-jupiter-front';
}
