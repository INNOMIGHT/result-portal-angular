import { Component, OnInit } from '@angular/core';
import { SelectStudentService } from 'src/app/select-student.service';
import { Student } from 'src/app/Student';
import { StudentDataTransferService } from 'src/app/student-data-transfer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {

  editToggler: boolean = false
  students: Student[] = this.studentDataTransferService.getData()

  constructor(private _location: Location, private studentDataTransferService: StudentDataTransferService, private selectStudentService: SelectStudentService) { }

  ngOnInit(): void {

  }

  totalStudents: number = this.studentDataTransferService.getData().length

  deleteStudent(student: Student){
    this.studentDataTransferService.deleteStudent(student);
  }

  trackByStudentList(rollNo: number, studentList: Student){
    return studentList.rollNo
  }

  studentIdentifierForEdit(student: Student){
    this.selectStudentService.selectStudent(student)
  }

  backClicked(){
    this._location.back();
  }

}
