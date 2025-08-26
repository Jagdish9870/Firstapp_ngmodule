import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverColor } from './hoverColor/hover-color';



@NgModule({
  declarations: [HoverColor],
  imports: [
    CommonModule
  ],
  exports: [
    HoverColor
  ]
})
export class DirectivesModule { }
