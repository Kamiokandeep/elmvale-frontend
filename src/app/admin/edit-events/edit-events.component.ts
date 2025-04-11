import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { EventsContentService } from '../../services/events-content.service';
import { EventsContent } from '../../models/events-content.model';

@Component({
  selector: 'app-edit-events',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-events.component.html',
  styleUrl: './edit-events.component.css',
  providers: [DatePipe]
})

export class EditEventsComponent implements OnInit {
  eventsContent: EventsContent = {
    heroTitle: '',
    heroImage: '',
    cards: []
  };

  constructor(
    private eventsService: EventsContentService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent(): void {
    this.eventsService.getEvents().subscribe(data => {
      if (data && data.length > 0) {
        this.eventsContent = data[0];
        this.eventsContent.cards = this.eventsContent.cards || [];

        this.eventsContent.cards.forEach(card => {
          if (card.date) {
            card.date = this.datePipe.transform(card.date, 'yyyy-MM-dd');
          }
        });
      }
    });
  }

  addEventCard(): void {
    this.eventsContent.cards.push({
      imageCard: '',
      titleCard: '',
      descriptionCard: '',
      date: new Date()
    });
  }

  save(): void {
    if (this.eventsContent._id) {
      this.eventsService.updateEvent(this.eventsContent._id, this.eventsContent).subscribe(() => {
        alert('Events content updated!');
      });
    } else {
      this.eventsService.createEvent(this.eventsContent).subscribe(() => {
        alert('Events content created!');
      });
    }
  }

  deleteCard(index: number): void {
    const card = this.eventsContent.cards[index];
    if (this.eventsContent._id && card._id && confirm('Are you sure you want to delete this card?')) {
      this.eventsService.deleteCard(this.eventsContent._id, card._id).subscribe(() => {
        this.eventsContent.cards.splice(index, 1);
      });
    } else {
      this.eventsContent.cards.splice(index, 1);
    }
  }
}