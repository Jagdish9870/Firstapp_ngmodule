import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';

const routes: Routes = [
  // {path:'', redirectTo: '/home',pathMatch: 'full'},  or use below to redirect
  // {path:'home', component:Home}
  // {path:'', component:Home},
  //  {path:'about', component:About},

   {
    path:'',
    loadChildren:()=>
      import('./home/home').then((m)=>m.Home),
   },
   {
    path:'about',
    loadChildren:()=>
      import('./about/about').then((m)=>m.About),
   },
   {
    path:'admin',
    loadChildren:()=>
      import('./admin/admin').then((m)=>m.Admin),
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
