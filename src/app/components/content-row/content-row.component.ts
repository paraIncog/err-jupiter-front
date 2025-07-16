import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-content-row',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './content-row.component.html',
  styleUrl: './content-row.component.css'
})

export class ContentRowComponent {

  @Input() title: string = '';
  @Input() items: any[] = [];

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;

  hoveredItem: any = null;
  
  scroll(direction: 'left' | 'right') {
    const el = this.scrollContainer.nativeElement;
    const scrollAmount = el.offsetWidth;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }

  getVerticalPhoto(item: any): string {

    if (!item.verticalPhotos?.length) return '';

    const photo = item.verticalPhotos[0];

    // Võta suurim pilt, muidu võta väikesem
    return (
      photo.photoTypes?.["80"]?.url ||
      photo.photoTypes?.["60"]?.url ||
      photo.photoUrlOriginal ||
      ''
    );
  }

}
