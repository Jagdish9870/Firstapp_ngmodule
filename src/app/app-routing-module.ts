import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Courses } from './pages/courses/courses';
import { Admin } from './pages/admin/admin';
import { Contact } from './pages/contact/contact';


const routes: Routes = [
  // {path:'', redirectTo: '/home',pathMatch: 'full'},  or use below to redirect
  // {path:'home', component:Home}
   {path:'', component:Home},
   {path:'about', component:About},
   {path:'course', component:Courses},
   {path:'admin', component:Admin},
   {path:'contact', component:Contact},

  //  {
  //   path:'',
  //   loadChildren: () =>
  //     import('./pages/home/home-module').then((m) => m.HomeModule),
  //  },
  //  {
  //   path:'about',
  //   loadChildren:()=>
  //     import('./pages/about/about-module').then((m)=>m.AboutModule),
  //  },
  //  {
  //   path:'admin',
  //   loadChildren:()=>
  //     import('./pages/admin/admin-module').then((m)=>m.AdminModule),
  //  },
  //  {
  //   path:'courses',
  //   loadChildren:()=>
  //     import('./pages/courses/course-module').then((m)=>m.CourseModule),
  //  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
