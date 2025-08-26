import { Component, inject } from '@angular/core';
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../interfaces/course.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {

  model :any={ };
  cover !: string | null ;
  cover_file : any;
  showError=false;
  courses: any[]=[];
  private courseService=inject(CourseService);
  onSubmit(form: NgForm){
    if(form.invalid || !this.cover){
      form.control.markAllAsTouched();
      if(!this.cover){
        this.showError=true;
      }
      return;
    }
   
    this.saveCourse(form);

  }
  clearForm(form:NgForm){
     form.reset();
    this.cover=null;
    this.cover_file=null;
  }
  onFileSelected(event: any){
    const file=event.target.files[0];
    if(file){
      this.cover_file=file; 
      const reader = new FileReader();
    console.log(reader);
    reader.onload=()=>{
      const dataUrl= reader.result!.toString();
      this.cover =dataUrl;
      console.log('image : ',this.cover);
    };
    reader.readAsDataURL(file);
    this.showError=false;

    }
    
    
  }
  async saveCourse(form: NgForm){

    try {
      const formValue=form.value;
    const data : Course={
      ...formValue,
      image: this.cover,
      // id: this.courses.length + 1,
    };
    await this.courseService.addCourse(data);
    // this.courses=[...this.courses,data];
    // this.setItem(this.courses);
    this.clearForm(form);
      
    } catch (error) {
      console.log(error);
      
    }
    
  }



  ngOnInit(){
    
    

  }
  
  
}
