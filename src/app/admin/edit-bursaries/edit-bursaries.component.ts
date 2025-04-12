import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BursariesContentService } from '../../services/bursaries-content.service';
import { BursariesContent } from '../../models/bursaries-content.model';

@Component({
  selector: 'app-edit-bursaries',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-bursaries.component.html',
  styleUrl: './edit-bursaries.component.css'
})

export class EditBursariesComponent implements OnInit {
  content: BursariesContent = {
    title: '',
    content: '',
    imageUrl: '',
    imageUrlDecoration: '',
    bursaryItems: [],
    additionalTitle: '',
    sideImageUrl: '',
    additionalLinkText: '',
    additionalLinkUrl: '',
    additionalLinkIcon: ''
  };

  constructor(private bursariesService: BursariesContentService) { }

  ngOnInit(): void {
    this.bursariesService.getContent().subscribe(data => {
      this.content = data || this.content;
    });
  }

  save(): void {
    this.bursariesService.updateContent(this.content).subscribe(updated => {
      alert('Content updated successfully!');
    });
  }

  addItem(): void {
    this.content.bursaryItems.push({ icon: '', title: '', description: '' });
  }

  removeItem(index: number): void {
    this.content.bursaryItems.splice(index, 1);
  }
}