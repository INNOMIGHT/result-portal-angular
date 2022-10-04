import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudentEditComponent } from './teacher-student-edit.component';

describe('TeacherStudentEditComponent', () => {
  let component: TeacherStudentEditComponent;
  let fixture: ComponentFixture<TeacherStudentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStudentEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherStudentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
