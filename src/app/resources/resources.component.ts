import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResourcesContentService } from '../services/resources-content.service';
import { ResourcesContent } from '../models/resources-content.model';

@Component({
  selector: 'app-resources',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})

export class ResourcesComponent implements OnInit {
  content: ResourcesContent | null = null;

  constructor(private contentService: ResourcesContentService) {}

  ngOnInit(): void {
    this.contentService.getResourcesContent().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        console.error('Error fetching resources content:', err);
      }
    });
  }  
}