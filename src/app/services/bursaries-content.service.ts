import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BursariesContent } from '../models/bursaries-content.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BursariesContentService {
  private apiUrl = `${environment.apiUrl}/bursaries-content`;

  constructor(private http: HttpClient) {}

  getContent(): Observable<BursariesContent> {
    return this.http.get<BursariesContent>(this.apiUrl);
  }

  updateContent(content: BursariesContent): Observable<BursariesContent> {
    return this.http.put<BursariesContent>(this.apiUrl, content);
  }
}
