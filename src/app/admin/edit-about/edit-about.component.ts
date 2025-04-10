import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutContentService } from '../../services/about-content.service';
import { AboutContent } from '../../models/about-content.model';

@Component({
  selector: 'app-edit-about',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-about.component.html',
  styleUrl: './edit-about.component.css'
})

export class EditAboutComponent implements OnInit {
  aboutContent: AboutContent = {
    historyTitle: '',
    historyDescription: '',
    historyParagraph: '',
    historyImage: '',

    evolutionTitle: '',
    evolutionDescription: '',
    evolutionParagraph: '',
    evolutionImage: '',

    missionTitle: '',
    missionSubTitle: '',
    missionObjectives: [],

    meetingTitle: '',
    meetingSubTitle: '',
    meetingObjectives: []
  };

  constructor(private aboutService: AboutContentService) { }

  ngOnInit(): void {
    this.aboutService.getAboutContent().subscribe(data => {
      this.aboutContent = data;
    });
  }
  
  addMissionObjective(): void {
    this.aboutContent.missionObjectives.push({ title: '', description: '' });
  }

  addMeetingObjective(): void {
    this.aboutContent.meetingObjectives.push({ title: '', description: '' });
  }
  
  loadContent(): void {
    this.aboutService.getAboutContent().subscribe(content => {
      this.aboutContent = content;
    });
  }

  save(): void {
    this.aboutService.updateAboutContent(this.aboutContent).subscribe(() => {
      alert('About content updated!');
    });
  }
}