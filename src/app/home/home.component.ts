import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeContent } from '../models/home-content.model';
import { HomeContentService } from '../services/home-content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  homeContent: HomeContent | null = null;

  constructor(private contentService: HomeContentService) {}

  ngOnInit(): void {
    this.contentService.getHomeContent().subscribe(data => {
      this.homeContent = data;
    });
  }
}

