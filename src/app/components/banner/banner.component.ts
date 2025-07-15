import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  bannerData: any;

  ngOnInit(): void {
    this.bannerData = {
      title: 'Pulss',
      description: 'Raske hingata 1/4',
      lead: `<p>Ilmari saab teada Meeri tagasitulekust ja mõistab, et tõe rääkimist ei ole võimalik kauem edasi lükata. Jesse korraldab Sonja lastele üllatuse. Marjut unustab Mila külaskäigu, kuid üritab vapralt head nägu teha.</p>`,
      imageUrl: 'https://s.err.ee/photo/crop/2025/07/14/2941596h7f09.jpg',
      link: 'https://jupiter.err.ee/1609705010'
    };
  }
}
