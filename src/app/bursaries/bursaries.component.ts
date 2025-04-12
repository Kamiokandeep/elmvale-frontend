import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BursariesContentService } from '../services/bursaries-content.service';
import { BursariesContent } from '../models/bursaries-content.model';

@Component({
  selector: 'app-bursaries',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bursaries.component.html',
  styleUrl: './bursaries.component.css'
})

export class BursariesComponent implements OnInit {
  content: BursariesContent = {
    title: '',
    content: '',
    imageUrl: '',
    imageUrlDecoration: '',
    additionalTitle: '',
    sideImageUrl: '',
    bursaryItems: [],
    additionalLinkText: '',
    additionalLinkUrl: '',
    additionalLinkIcon: ''
  };
  
  isLoading = true;

  constructor(private bursariesService: BursariesContentService) {}

  ngOnInit(): void {
    this.bursariesService.getContent().subscribe(data => {
      if (data) {
        this.content = data;
      }
      this.isLoading = false;
    });
  }
}
