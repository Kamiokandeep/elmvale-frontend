import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventsContentService } from '../services/events-content.service';
import { EventsContent } from '../models//events-content.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})

export class EventsComponent implements OnInit {
  eventsContent: EventsContent = {
    heroTitle: '',
    heroImage: '',
    cards: []
  };  

  constructor(private eventsContentService: EventsContentService) { }

  ngOnInit(): void {
    this.eventsContentService.getEvents().subscribe(data => {
      if (data && data.length > 0) {
        this.eventsContent = data[0];
      }
    });
  }
}
