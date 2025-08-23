import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './component/about/about';

const routes: Routes = [
  // {path:'', redirectTo: '/home',pathMatch: 'full'},  or use below to redirect
  {path:'', component:Home},
   {path:'about', component:About},
  // {path:'home', component:Home}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
