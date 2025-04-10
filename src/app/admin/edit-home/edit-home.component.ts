import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeContentService } from '../../services/home-content.service';
import { HomeContent } from '../../models/home-content.model';

@Component({
  selector: 'app-edit-home',
  imports: [FormsModule],
  templateUrl: './edit-home.component.html',
  styleUrl: './edit-home.component.css'
})
export class EditHomeComponent implements OnInit {

  homeContent: HomeContent = {
    heroImage: '',
    heroTitle: '',
    welcomeTitle: '',
    missionTitle: '',
    missionDescription: '',
    missionParagraph1: '',
    missionParagraph2: '',
    missionImage: ''
  };

  constructor(private homeContentService: HomeContentService) { }

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent(): void {
    this.homeContentService.getHomeContent().subscribe(content => {
      this.homeContent = content;
    });
  }

  save(): void {
    this.homeContentService.updateHomeContent(this.homeContent).subscribe(() => {
      alert('Home content updated!');
    });
  }
}
