import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { TeacherViewComponent } from './Components/teacher-view/teacher-view.component';
import { StudentViewComponent } from './Components/student-view/student-view.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentResultComponent } from './Components/student-result/student-result.component';
import { TeacherStudentAddComponent } from './Components/teacher-student-add/teacher-student-add.component';
import { TeacherStudentEditComponent } from './teacher-student-edit/teacher-student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TeacherViewComponent,
    StudentViewComponent,
    StudentResultComponent,
    TeacherStudentAddComponent,
    TeacherStudentEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
