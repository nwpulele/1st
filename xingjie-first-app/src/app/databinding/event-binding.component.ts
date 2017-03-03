import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'xj-event-binding',
  template: `
    <button (click)="onClick()">Click Me!</button>
  `,
  styles: []
})
export class EventBindingComponent{
  @Output() clicked = new EventEmitter<String>();

  onClick () {
    this.clicked.emit("Emit Works")
  }


}
