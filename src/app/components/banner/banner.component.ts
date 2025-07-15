import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() bannerData: any;

  get imageUrl(): string {
    return this.bannerData?.photos?.[0]?.photoTypes?.[2]?.url || '';
  }
}
