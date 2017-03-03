import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xj-another',
  template: `
    <p>
      another Works!
    </p>
    <ng-content></ng-content>
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
