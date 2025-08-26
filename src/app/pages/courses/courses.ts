import { Component, effect, inject, input, Input, SecurityContext, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {

  constructor(){
    effect(()=> {
      const courses=this.courseService.coursesSignal();

      if(courses !== this.courses()){
 this.courses.set(courses);
      }
     
      
    },{allowSignalWrites: true})
  }
  //  isAdmin=input(false,{
  //   // alias: 'isAdm'
  //  });
   isAdmin=input<boolean>(false);
  // courses: Course[]=[];
  courses= signal<Course[]>([]);

  // coursesSub!: Subscription;
   
 private courseService=inject(CourseService);
//  private sanitizer =inject(DomSanitizer);
//  sanitizerUrl(value: string){
//   return this.sanitizer.sanitize(SecurityContext.URL, value) || null

//  }
   deleteCourse(course:any){
    this.courseService.deleteCourse(course);


   }
   
    ngOnInit(){
      // this.courses=this.courseService.getCourses();

      //  this.courses.set(this.courseService.getCourses());
      // this.coursesSub=this.courseService.courses.subscribe({
      //   next:(courses)=>{
      //     this.courses.set(courses);
      //   },error:(e)=>{
      //     console.log(e);
      //   }
      // });
    }

    ngOnDestroy(){
      // if(this.coursesSub){
      //   // this.coursesSub.unsubscribe();
      // }
    }
  }