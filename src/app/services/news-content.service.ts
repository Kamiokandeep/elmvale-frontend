import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsContent } from '../models/news-content.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NewsContentService {
  private apiUrl = `${environment.apiUrl}/news-content`;

  constructor(private http: HttpClient) {}

  getNews(): Observable<NewsContent[]> {
    return this.http.get<NewsContent[]>(this.apiUrl);
  }

  createNews(news: NewsContent): Observable<NewsContent> {
    return this.http.post<NewsContent>(this.apiUrl, news);
  }

  updateNews(id: string, news: NewsContent): Observable<NewsContent> {
    return this.http.put<NewsContent>(`${this.apiUrl}/${id}`, news);
  }

  deleteCard(contentId: string, cardId: string) {
    return this.http.delete(`${this.apiUrl}/${contentId}/cards/${cardId}`);
  }  
}
