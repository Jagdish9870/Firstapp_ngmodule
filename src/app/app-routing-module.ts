import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
// import { Home } from '../../../First_app/src/app/home/home';

const routes: Routes = [
  // {path:'', redirectTo: '/home',pathMatch: 'full'},  or use below to redirect
  // {path:'home', component:Home}
  {path:'', component:Home},
   {path:'about', component:About},
  //  {
  //   path:'',
  //   loadChildren:()=>
  //     import('./home/home').then((m)=>m.Home),
  //  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
