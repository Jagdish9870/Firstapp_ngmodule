import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { FormsModule } from '@angular/forms';
import { CourseModule } from '../courses/course-module';
import { Admin } from './admin';



@NgModule({
  declarations: [Admin],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CourseModule
  ]
})
export class AdminModule { }
