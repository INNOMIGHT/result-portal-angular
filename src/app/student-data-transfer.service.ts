import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentDataTransferService {

  students: Student[] = [];

  constructor() {
    this.students = [
      {
        rollNo: 12345,
        name: "Vaibhav",
        email: "vaibhav@gmail.com",
        score: 500
      },
      {
        rollNo: 23451,
        name: "Varun",
        email: "varun@gmail.com",
        score: 600
      },
      {
        rollNo: 34521,
        name: "Yash",
        email: "yash@gmail.com",
        score: 400
      }
    ]
  }

  

  setData(data: Student[]){
    this.students = data;
  }

  getData(){
    return this.students;
  }

  addStudent(student: Student){
    this.students.push(student)
  }

  deleteStudent(student: Student){
    const index = this.students.indexOf(student)
    this.students.splice(index, 1)
    return index
  }

  addStudentAtIndex(index: number, student: Student){
    this.students.splice(index, 0, student)
  }
}

