import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xj-twoway-binding',
  template: `
    <h1>
      twoway-binding Works!
    </h1>
    
    <input type="text" [(ngModel)]="Person.name">
    <input type="text" [(ngModel)]="Person.name">
  `,
  styles: []
})
export class TwowayBindingComponent  {

  Person = {
    name: "Chad",
    age: 27
  }

}
