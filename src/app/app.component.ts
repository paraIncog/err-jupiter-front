import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentRowComponent } from './components/content-row/content-row.component';
import { ContentService } from './services/content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentRowComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'err-jupiter-front';
  frontPageRows: any[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getFrontPageContent().subscribe((response: any[]) => {
      this.frontPageRows = response.map(topic => ({
        title: topic.header,
        data: topic.data
      }))
    });
  }
}
