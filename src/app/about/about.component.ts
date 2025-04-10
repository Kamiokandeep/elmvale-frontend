import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutContent } from '../models/about-content.model';
import { AboutContentService } from '../services/about-content.service';

@Component({
  selector: 'app-about',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {
  aboutContent: AboutContent | null = null;

  constructor(private contentService: AboutContentService) { }

  ngOnInit(): void {
    this.contentService.getAboutContent().subscribe(data => {
      this.aboutContent = data;
    });
  }

  chunkedObjectives(list: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < list.length; i += size) {
      result.push(list.slice(i, i + size));
    }
    return result;
  }
}
