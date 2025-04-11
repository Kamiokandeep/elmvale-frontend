import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventsContent } from '../models/events-content.model';

@Injectable({
  providedIn: 'root'
})

export class EventsContentService {
  private apiUrl = 'http://localhost:3000/api/events-content';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventsContent[]> {
    return this.http.get<EventsContent[]>(this.apiUrl);
  }

  createEvent(event: EventsContent): Observable<EventsContent> {
    return this.http.post<EventsContent>(this.apiUrl, event);
  }

  updateEvent(id: string, event: EventsContent): Observable<EventsContent> {
    return this.http.put<EventsContent>(`${this.apiUrl}/${id}`, event);
  }

  deleteCard(contentId: string, cardId: string) {
    return this.http.delete(`${this.apiUrl}/${contentId}/cards/${cardId}`);
  }  
}
