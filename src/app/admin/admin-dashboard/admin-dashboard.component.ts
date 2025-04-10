import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeContent } from '../../models/home-content.model';
import { HomeContentService } from '../../services/home-content.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [FormsModule, SidebarComponent, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})

export class AdminDashboardComponent implements OnInit {
  homeContent: HomeContent = {} as HomeContent;

  constructor(private contentService: HomeContentService) { }

  ngOnInit(): void {
    this.contentService.getHomeContent().subscribe({
      next: data => {
        this.homeContent = data;
      },
      error: err => {
        console.error('API error:', err);
        alert('Make sure the API is running.');
      }
    });
  }

  save(): void {
    this.contentService.updateHomeContent(this.homeContent).subscribe(() => {
      alert('Content saved!');
    });
  }
}