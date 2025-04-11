import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { NewsContentService } from '../../services/news-content.service';
import { NewsContent } from '../../models/news-content.model';

@Component({
  selector: 'app-edit-news',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-news.component.html',
  styleUrl: './edit-news.component.css',
  providers: [DatePipe]
})

export class EditNewsComponent implements OnInit {
  newsContent: NewsContent = {
    heroTitle: '',
    heroImage: '',
    cards: []
  };

  constructor(
    private newsService: NewsContentService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent(): void {
    this.newsService.getNews().subscribe(data => {
      if (data && data.length > 0) {
        this.newsContent = data[0];
        this.newsContent.cards = this.newsContent.cards || [];

        this.newsContent.cards.forEach(card => {
          if (card.date) {
            card.date = this.datePipe.transform(card.date, 'yyyy-MM-dd');
          }
        });
      }
    });
  }

  addNewsCard(): void {
    this.newsContent.cards.push({
      imageCard: '',
      titleCard: '',
      descriptionCard: '',
      date: new Date()
    });
  }

  save(): void {
    if (this.newsContent._id) {
      this.newsService.updateNews(this.newsContent._id, this.newsContent).subscribe(() => {
        alert('News content updated!');
      });
    } else {
      this.newsService.createNews(this.newsContent).subscribe(() => {
        alert('News content created!');
      });
    }
  }

  deleteCard(index: number): void {
    const card = this.newsContent.cards[index];
    if (this.newsContent._id && card._id && confirm('Are you sure you want to delete this card?')) {
      this.newsService.deleteCard(this.newsContent._id, card._id).subscribe(() => {
        this.newsContent.cards.splice(index, 1);
      });
    } else {
      this.newsContent.cards.splice(index, 1);
    }
  }
}