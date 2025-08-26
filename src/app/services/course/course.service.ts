import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../../interfaces/course.interface';
import { Strings } from '../../enum/strings.enum';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
   private courses$= new BehaviorSubject<Course[]>([]);

   get courses(){
    return this.courses$.asObservable();
   }
  getCourses() :Course[]{
  const data=localStorage.getItem(Strings.STORAGE_KEY);
    if(data)
      {
        const courses=JSON.parse(data);
       this.updateCourses(courses)
       return courses;
      }
      return [];

    }

    addCourse(data: Course){
      const courses=this.courses$.value;
        const newCourses=[...courses,{...data, id: courses.length+1}];
        this.updateCourses(newCourses);
        //save in local 
        this.setItem(newCourses);
        return newCourses;
 
    }
    updateCourses(data: Course[]){
      this.courses$.next(data);
      

    }
    deleteCourse(data: Course){
      let courses=this.courses$.value;
      courses=courses.filter(course_item => course_item.id != data.id);
      this.updateCourses(courses);
      this.setItem(courses)


    }
    setItem(data:Course[]){

    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));

  }

  
}
