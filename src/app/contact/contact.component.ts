import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactContentService } from '../services/contact-content.service';
import { ContactContent } from '../models/contact-content.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {
  private messageUrl = `${environment.apiUrl}/contact-content/message`;

  content!: ContactContent;
  contactForm!: FormGroup;

  // Handles content, forms, and HTTP requests
  constructor(
    private contactService: ContactContentService,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  // Initialize the form with its fields and validations
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      preferredMethod: ['', Validators.required],
      consent: [false, Validators.requiredTrue]
    });
    // Get the current contact content from the backend
    this.contactService.getContactContent().subscribe((data) => {
      this.content = data;
    });
  }

  // Submit Form
  submitForm(): void {
    if (this.contactForm.valid) {
      this.http.post(this.messageUrl, this.contactForm.value).subscribe(() => {
        alert('Your message has been sent!');
        this.contactForm.reset();
      });
    }
  }

}