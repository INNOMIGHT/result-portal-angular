import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { StudentResultComponent } from './Components/student-result/student-result.component';
import { StudentViewComponent } from './Components/student-view/student-view.component';
import { TeacherStudentAddComponent } from './Components/teacher-student-add/teacher-student-add.component';
import { TeacherViewComponent } from './Components/teacher-view/teacher-view.component';
import { TeacherStudentEditComponent } from './teacher-student-edit/teacher-student-edit.component';

const routes: Routes = [
  {path: "", component: LoginPageComponent},
  {path: "teacher-view", component: TeacherViewComponent},
  {path: "student-view", component: StudentViewComponent},
  {path: "student-view/:rollNo", component: StudentResultComponent},
  {path: "teacher-view/add-student", component: TeacherStudentAddComponent},
  {path: "teacher-view/edit-student/:rollNo", component: TeacherStudentEditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
