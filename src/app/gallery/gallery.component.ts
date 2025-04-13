import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GalleryContent } from '../models/gallery-content.model';
import { GalleryContentService } from '../services/gallery-content.service';

@Component({
  selector: 'app-gallery',
  imports: [FormsModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent implements OnInit {
  content: GalleryContent = {
    heroTitle: '',
    heroImage: '',
    introText: '',
    sectionTitle: '',
    sectionDescription: '',
    albums: [],
    winners: []
  };

  constructor(private galleryService: GalleryContentService) { }

  ngOnInit(): void {
    this.galleryService.getContent().subscribe(data => {
      this.content = data;
    });
  }
}
