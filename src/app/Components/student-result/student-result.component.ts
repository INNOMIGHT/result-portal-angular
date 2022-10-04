import { Component, Input, OnInit } from '@angular/core';
import { SelectStudentService } from 'src/app/select-student.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {

  
  constructor(private selectStudentService: SelectStudentService) { }

  ngOnInit(): void{
    console.log(this.selectStudentService.getSelectedStudent())
  }

  reportedStudent: Student = this.selectStudentService.getSelectedStudent()

  

}
