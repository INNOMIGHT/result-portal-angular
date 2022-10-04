import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataTransferService } from 'src/app/student-data-transfer.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teacher-student-add',
  templateUrl: './teacher-student-add.component.html',
  styleUrls: ['./teacher-student-add.component.css']
})
export class TeacherStudentAddComponent implements OnInit {

  studentAddForm = this.fb.group({
    rollno: [, [Validators.required]],
    name: [, [Validators.required]],
    email: [, [Validators.required, Validators.email]],
    score: [, [Validators.required]]
  })

  get rollNo(){
    return this.studentAddForm.get('rollno');
  }
  get name(){
    return this.studentAddForm.get('name');
  }
  get email(){
    return this.studentAddForm.get('email');
  }
  get score(){
    return this.studentAddForm.get('score');
  }
  

  constructor(private _location: Location, private fb: FormBuilder, private studentDataTransferService: StudentDataTransferService, private router: Router) { }

  ngOnInit(): void {
    this.studentAddForm
  }


  addStudent(){
    if(this.studentAddForm.valid){
      const student = {
        rollNo: this.studentAddForm.controls.rollno.value!,
        name: this.studentAddForm.controls.name.value!,
        email: this.studentAddForm.controls.email.value!,
        score: this.studentAddForm.controls.score.value!
      }
      this.studentDataTransferService.addStudent(student)
      console.log(student)
      this.router.navigate(["teacher-view/"])
    }
  }

  backClicked(){
    this._location.back();
  }

  formReset(){
    this.studentAddForm.reset()
  }
}
