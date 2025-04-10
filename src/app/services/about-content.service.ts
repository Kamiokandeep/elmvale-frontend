import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutContent } from '../models/about-content.model';

@Injectable({
  providedIn: 'root'
})

export class AboutContentService {
  private apiUrl = 'http://localhost:3000/api/about-content';

  constructor(private http: HttpClient) {}

  getAboutContent(): Observable<AboutContent> {
    return this.http.get<AboutContent>(this.apiUrl);
  }

  updateAboutContent(data: AboutContent): Observable<AboutContent> {
    return this.http.put<AboutContent>(this.apiUrl, data);
  }
}