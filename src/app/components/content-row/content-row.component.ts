import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-row',
  imports: [CommonModule],
  templateUrl: './content-row.component.html',
  styleUrl: './content-row.component.css'
})

export class ContentRowComponent {

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

  @Input() title: string = '';
  @Input() items: any[] = [];

}
