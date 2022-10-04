import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class SelectStudentService {

  selectedStudent: Student = new Student;
  constructor() { }

  selectStudent(student: Student){
    this.selectedStudent = student;
  }

  getSelectedStudent(){
    return this.selectedStudent;
  }

  clearStudentSelection(){
    this.selectedStudent = new Student;
  }
}
