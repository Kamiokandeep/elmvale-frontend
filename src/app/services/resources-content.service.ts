import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourcesContent } from '../models/resources-content.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ResourcesContentService {
  private apiUrl = `${environment.apiUrl}/resources-content`;

  constructor(private http: HttpClient) { }

  getResourcesContent(): Observable<ResourcesContent> {
    return this.http.get<ResourcesContent>(this.apiUrl);
  }

  updateResourcesContent(content: ResourcesContent): Observable<any> {
    return this.http.put(this.apiUrl, content);
  }
}
