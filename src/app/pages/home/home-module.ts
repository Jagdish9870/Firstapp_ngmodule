import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { AboutModule } from '../about/about-module';
import { CourseModule } from '../courses/course-module';
import { Home } from './home';


@NgModule({
  declarations: [Home],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AboutModule,
    CourseModule    
  ]
})
export class HomeModule { }
