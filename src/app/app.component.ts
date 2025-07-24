import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentRowComponent } from './components/content-row/content-row.component';
import { ContentService } from './services/content.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentRowComponent, CommonModule, BannerComponent],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  frontPageRows: any[] = [];
  bannerItem: any[] = [];

  title = 'err-jupiter-front';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee').subscribe((response: any) => {
      const frontPage = response?.data?.category?.frontPage || [];

      const bannerBlock = frontPage.find((block: any) => block.manual?.banner && block.data?.length > 0);
      this.bannerItem = bannerBlock?.data[0];

      this.frontPageRows = frontPage.filter((block: any) => !block.manual?.banner);
      this.frontPageRows = frontPage.filter((block: any) => !block.manual?.banner);
    });
  }
}
