import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Firstapp_ngmodule');
    // property_binding=" designer is jack"

  // ngOnInit(){
  //  // this.changeProperty();
  // }

  // changeProperty(){
  //   this.property_binding=" creater is jack"
  // }
}
