import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudentAddComponent } from './teacher-student-add.component';

describe('TeacherStudentAddComponent', () => {
  let component: TeacherStudentAddComponent;
  let fixture: ComponentFixture<TeacherStudentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStudentAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherStudentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
