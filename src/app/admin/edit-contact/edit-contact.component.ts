import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactContentService } from '../../services/contact-content.service';
import { ContactContent } from '../../models/contact-content.model';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})

export class EditContactComponent implements OnInit {
  contactForm!: FormGroup;
  contentId!: string;

  constructor(
    // Used to build reactive forms more easily
    private fb: FormBuilder,
    // Service to get and update content
    private contactService: ContactContentService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      heroTitle: [''],
      heroText: [''],
      image: [''],
      email: [''],
      phone: [''],
      location: [''],
      meetingDetails: ['']
    });

    this.contactService.getContactContent().subscribe((content) => {
      this.contentId = content._id!;
      this.contactForm.patchValue(content);
    });
  }

  onSubmit(): void {
    // If the form is valid, an object is created with the updated data.
    if (this.contactForm.valid) {
      const updatedContent: ContactContent = {
        // Keep the same ID to update the existing document
        _id: this.contentId,
        // Combine the form values ​​with the ID
        ...this.contactForm.value 
      };
      
      // I send the update to the backend
      this.contactService.updateContactContent(updatedContent).subscribe(() => {
        alert('Contact content updated successfully');
      });
    }
  }
  
}