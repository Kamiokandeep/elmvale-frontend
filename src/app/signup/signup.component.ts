import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
// sign-up validation
export class SignupComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInuit(): void {
    this.signUpForm = this.fb.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],


    })

  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onSignUp() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value)
    } else {
      this.validateAllFormFields(this.signUpForm)
      // logic for throwing error
    }
  }
private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control)
      }
    })
  }
}
