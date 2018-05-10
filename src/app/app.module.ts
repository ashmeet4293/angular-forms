import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingupFormComponent } from './singup-form/singup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { StudentFormComponent } from './student-form/student-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SingupFormComponent,
    NewCourseFormComponent,
    StudentFormComponent
   
  ],
  imports: [
    BrowserModule,
     FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
