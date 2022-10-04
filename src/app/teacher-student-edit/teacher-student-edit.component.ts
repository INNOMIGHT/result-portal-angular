import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataTransferService } from 'src/app/student-data-transfer.service';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { Student } from '../Student';
import { SelectStudentService } from '../select-student.service';

@Component({
  selector: 'app-teacher-student-edit',
  templateUrl: './teacher-student-edit.component.html',
  styleUrls: ['./teacher-student-edit.component.css']
})
export class TeacherStudentEditComponent implements OnInit {

  student: Student = this.studentSelectService.getSelectedStudent()

  studentEditForm = this.fb.group({
    rollno: [this.student.rollNo, [Validators.required]],
    name: [this.student.name, [Validators.required]],
    email: [this.student.email, [Validators.required, Validators.email]],
    score: [this.student.score, [Validators.required]]
  })

  get rollNo(){
    return this.studentEditForm.get('rollno');
  }
  get name(){
    return this.studentEditForm.get('name');
  }
  get email(){
    return this.studentEditForm.get('email');
  }
  get score(){
    return this.studentEditForm.get('score');
  }

  constructor(private fb: FormBuilder, private studentDataTransferService: StudentDataTransferService, private router: Router, private studentSelectService: SelectStudentService) { }

  ngOnInit(): void {
    // this.studentEditForm
  }


  editStudent(){
    if(this.studentEditForm.valid){
      const newStudent = {
        rollNo: this.studentEditForm.controls.rollno.value!,
        name: this.studentEditForm.controls.name.value!,
        email: this.studentEditForm.controls.email.value!,
        score: this.studentEditForm.controls.score.value!
      }
      
      const selectedStudentIndex = this.studentDataTransferService.deleteStudent(this.student)
      this.studentDataTransferService.addStudentAtIndex(selectedStudentIndex, newStudent)
      console.log(this.student)
      this.router.navigate(["teacher-view/"])
    }
  }
  
  formReset(){
    this.studentEditForm.reset()
  }

}
