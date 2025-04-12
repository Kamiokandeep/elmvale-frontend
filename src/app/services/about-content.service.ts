import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutContent } from '../models/about-content.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AboutContentService {
  private apiUrl = `${environment.apiUrl}/about-content`;

  constructor(private http: HttpClient) {}

  getAboutContent(): Observable<AboutContent> {
    return this.http.get<AboutContent>(this.apiUrl);
  }

  updateAboutContent(data: AboutContent): Observable<AboutContent> {
    return this.http.put<AboutContent>(this.apiUrl, data);
  }
}