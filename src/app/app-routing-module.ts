import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path:'', redirectTo: '/home',pathMatch: 'full'},  or use below to redirect
  // {path:'home', component:Home}
  // {path:'', component:Home},
  //  {path:'about', component:About},

   {
    path:' ',
    loadChildren:()=>
      import('./pages/home/home').then((m)=>m.Home),
   },
   {
    path:'about',
    loadChildren:()=>
      import('./pages/about/about').then((m)=>m.About),
   },
   {
    path:'admin',
    loadChildren:()=>
      import('./pages/admin/admin').then((m)=>m.Admin),
   },
   {
    path:'courses',
    loadChildren:()=>
      import('./pages/courses/courses').then((m)=>m.Courses),
   }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
