import { Component, OnInit } from '@angular/core';
import {TwowayBindingComponent} from "./twoway-binding.component"

@Component({
  selector: 'xj-databinding',
  template: `
    <p>
      databinding Works!
    </p>
    <p>{{testString}}</p>
    
    <h1>Property Binding</h1>
    <input text="" [value]="testString">
    <p [ngClass]="{redFont: onTrue()}">Style Test</p>
    <h3> Custom Property Binding</h3>
    <xj-propertybinding [result]="10"></xj-propertybinding>
    <h1> Event Binding</h1>
    <xj-event-binding (clicked)="onClicked($event)"></xj-event-binding>
    <hr>
    <xj-twoway-binding></xj-twoway-binding>
    
  `,
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  testString = "This is test String!";
  onTrue () {
    return false;
};
  onClicked(value: String){
    alert(value)
  }

}
