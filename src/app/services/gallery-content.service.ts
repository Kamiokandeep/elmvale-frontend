import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GalleryContent } from '../models/gallery-content.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GalleryContentService {
  private apiUrl = `${environment.apiUrl}/gallery-content`;

  constructor(private http: HttpClient) {}

  getContent(): Observable<GalleryContent> {
    return this.http.get<GalleryContent>(this.apiUrl);
  }

  updateContent(content: GalleryContent): Observable<GalleryContent> {
    return this.http.put<GalleryContent>(this.apiUrl, content);
  }
}
