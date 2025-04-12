import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeContent } from '../models/home-content.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HomeContentService {
  private apiUrl = `${environment.apiUrl}/home-content`;

  constructor(private http: HttpClient) {}

  getHomeContent(): Observable<HomeContent> {
    return this.http.get<HomeContent>(this.apiUrl);
  }

  updateHomeContent(content: HomeContent): Observable<HomeContent> {
    return this.http.put<HomeContent>(this.apiUrl, content);
  }
}
