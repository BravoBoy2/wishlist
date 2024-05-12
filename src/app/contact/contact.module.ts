import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ContactComponent
  ],
  exports: [ContactComponent],
  providers: []
})
export class ContactModule { }
