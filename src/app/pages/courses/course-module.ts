import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing-module';
import { Courses } from './courses';
import { Course } from '../../interfaces/course.interface';



@NgModule({
  declarations: [Courses],
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  exports:[Courses]
})
export class CourseModule { }
