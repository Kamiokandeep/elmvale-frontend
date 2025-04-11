import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsContentService } from '../services/news-content.service';
import { NewsContent } from '../models/news-content.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})

export class NewsComponent implements OnInit {
  newsContent: NewsContent = {
    heroTitle: '',
    heroImage: '',
    cards: []
  };  

  constructor(private newsContentService: NewsContentService) { }

  ngOnInit(): void {
    this.newsContentService.getNews().subscribe(data => {
      if (data && data.length > 0) {
        this.newsContent = data[0];
      }
    });
  }
}
