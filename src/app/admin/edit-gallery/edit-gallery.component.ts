import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GalleryContentService } from '../../services/gallery-content.service';
import { GalleryContent } from '../../models/gallery-content.model';

@Component({
  selector: 'app-edit-gallery',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-gallery.component.html',
  styleUrl: './edit-gallery.component.css'
})

export class EditGalleryComponent implements OnInit {
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
    this.galleryService.getContent().subscribe(data => this.content = data);
  }

  saveContent() {
    this.galleryService.updateContent(this.content).subscribe({
      next: () => {
        alert('Gallery content updated!');
      },
      error: (err) => {
        console.error('Error updating gallery content:', err);
        alert('There was an error updating the gallery content.');
      }
    });
  }
  
  addAlbum() {
    this.content.albums.push({ title: '', images: [] });
  }

  deleteAlbum(index: number) {
    this.content.albums.splice(index, 1);
  }

  addWinnerAlbum() {
    this.content.winners.push({ title: '', images: [] });
  }

  deleteWinnerAlbum(index: number) {
    this.content.winners.splice(index, 1);
  }
}
