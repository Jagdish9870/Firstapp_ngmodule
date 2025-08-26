import { Component, inject, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {

  @Input() isAdmin=false;
  courses: Course[]=[];
  coursesSub!: Subscription;
   
 private courseService=inject(CourseService);
   deleteCourse(course:any){
    this.courseService.deleteCourse(course);


   }
   
    ngOnInit(){
      this.courses=this.courseService.getCourses();
      this.coursesSub=this.courseService.courses.subscribe({
        next:(courses)=>{
          this.courses=courses;
        },error:(e)=>{
          console.log(e);
        }
      });
    }

    ngOnDestroy(){
      if(this.coursesSub){
        this.coursesSub.unsubscribe();
      }
    }
  }