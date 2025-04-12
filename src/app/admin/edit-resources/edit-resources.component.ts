import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResourcesContentService } from '../../services/resources-content.service';
import { ResourcesContent, ResourceCard, ResourceListItem  } from '../../models/resources-content.model';

@Component({
  selector: 'app-edit-resources',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-resources.component.html',
  styleUrls: ['./edit-resources.component.css']
})

export class EditResourcesComponent implements OnInit {
  content: ResourcesContent = {
    heroImage: '',
    heroTitle: '',
    introText: '',
    cards: [],
    sectionTitle: '',
    sectionDescription: '',
    sectionList: []
  };

  constructor(private contentService: ResourcesContentService) {}

  ngOnInit(): void {
    this.contentService.getResourcesContent().subscribe((data) => {
      this.content = data;
    });
  }

  addCard(): void {
    const newCard: ResourceCard = { image: '', title: '', description: '' };
    this.content.cards.push(newCard);
  }

  removeCard(index: number): void {
    this.content.cards.splice(index, 1);
  }

  addListItem(): void {
    const newItem: ResourceListItem  = { icon: '', title: '', content: '' };
    this.content.sectionList.push(newItem);
  }

  removeListItem(index: number): void {
    this.content.sectionList.splice(index, 1);
  }

  onSave(): void {
    this.contentService.updateResourcesContent(this.content).subscribe(() => {
      alert('Resources content updated successfully!');
    });
  }
}
