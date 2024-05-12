import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, ReactiveFormsModule, Validators, FormsModule, FormGroup, MaxValidator } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createInvalidEmailDomain } from './InvalidEmailDomain';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

const invalidEmailDomain = createInvalidEmailDomain(['yahoo.com', 'gmail.com']);
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDividerModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  contactForm = new FormGroup({

  senderName : new FormControl('', Validators.required),
  senderMessage : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(150)]),
  emailFormControl : new FormControl('', [Validators.required, Validators.email, invalidEmailDomain])

  });
    matcher = new MyErrorStateMatcher();
  
  //email address validation
 

  submitForm(){
    console.log(this.contactForm.valid);
  }
}

