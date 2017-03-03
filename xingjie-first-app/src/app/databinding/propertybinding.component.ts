import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'xj-propertybinding',
  template: `
    <p>
      propertybinding Works!
    </p>
    
    {{result}}
  `,
  styles: []
})
export class PropertybindingComponent  {

  @Input() result: number =0;

}
