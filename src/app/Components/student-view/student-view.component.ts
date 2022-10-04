import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Student';
import { StudentDataTransferService } from 'src/app/student-data-transfer.service';
import { StudentResultComponent } from '../student-result/student-result.component';
import { SelectStudentService } from 'src/app/select-student.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  

  studentSearchForm = this.fb.group({
    rollno: [, [Validators.required]],
    name: [, [Validators.required]],
  })

  get rollno(){
    return this.studentSearchForm.get('rollno');
  }
  get name(){
    return this.studentSearchForm.get('name');
  }

  // @Output() selectStudent: EventEmitter<Student> = new EventEmitter();
  
  studentList = this.studentDataTransferService.getData();

  constructor(private fb: FormBuilder, private _location: Location, private studentDataTransferService: StudentDataTransferService, private router: Router, private selectStudentService: SelectStudentService) {
    console.log(this.studentList)
   }

  ngOnInit(): void {
      
    }

  searchStudent(){
    for (let i=0; i< this.studentList.length; i++){
      if (this.studentSearchForm.controls.rollno.value! == this.studentList[i].rollNo && this.studentSearchForm.controls.name.value! == this.studentList[i].name){
        console.log(this.studentList[i])
        this.selectStudentService.selectStudent(this.studentList[i])
        this.router.navigate(["student-view/" + this.rollno])
        // this.selectStudent.emit(this.studentList[i])
      }
    }
    console.log("false")
    alert("Roll No and Name does not match!")
    return false
  }

  backClicked(){
    this._location.back();
  }

  formReset(){
    this.studentSearchForm.reset()
  }
  
  
}
