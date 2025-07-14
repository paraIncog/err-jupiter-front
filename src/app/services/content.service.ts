import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private apiUrl = 'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';

  constructor(private http: HttpClient) { }

  getFrontPageContent(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res?.data?.category?.frontPage || []),
      map(frontPage =>
        frontPage.filter((row: any) => row.highTimeline !== false)
      )
    );
  }
}
