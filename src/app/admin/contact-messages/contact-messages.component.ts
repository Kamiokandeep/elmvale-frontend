import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

// I use this Interface to define the structure of the contact form to define a predefined structure
interface ContactMessage {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredMethod: string;
  consent: boolean;
  read: boolean;
  createdAt: string;
}

@Component({
  selector: 'app-contact-messages',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-messages.component.html',
  styleUrl: './contact-messages.component.css'
})

export class ContactMessagesComponent implements OnInit {
  messages: ContactMessage[] = [];
  apiUrl = `${environment.apiUrl}/contact-content`;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.http.get<ContactMessage[]>(`${this.apiUrl}/message`).subscribe(data => {
      this.messages = data;
    });
  }

  markAsRead(id: string): void {
    this.http.put(`${this.apiUrl}/message/${id}/read`, {}).subscribe(() => {
      this.loadMessages();
    });
  }
}
