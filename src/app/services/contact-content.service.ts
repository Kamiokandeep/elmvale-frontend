import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactContent } from '../models/contact-content.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContactContentService {
  private apiUrl = `${environment.apiUrl}/contact-content/content`;

  constructor(private http: HttpClient) {}

  getContactContent(): Observable<ContactContent> {
    return this.http.get<ContactContent>(`${this.apiUrl}`);
  }

  updateContactContent(content: ContactContent): Observable<ContactContent> {
    return this.http.put<ContactContent>(`${this.apiUrl}`, content);
  }
}
