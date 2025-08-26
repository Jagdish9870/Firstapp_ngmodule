import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  // private router=inject(Router);

  // navigate(){
  //   this.router.navigate(['/about'])
  // }

  courses: any[]=[];
//   getCourses(){
//     const data=localStorage.getItem(Strings.STORAGE_KEY);
//       if(data)
//         {
//           this.courses=JSON.parse(data);
//         }
  
  
// }
ngOnInit(){
  // this.getCourses();
}
}