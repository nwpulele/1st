import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [];
  recipe = new Recipe("小依依","小依依","https://scontent.forf1-1.fna.fbcdn.net/v/t1.0-1/p160x160/15665644_780196665467858_8382393444023208115_n.jpg?oh=c1e10bc4e1e4fa0285dc6c19f651c8af&oe=593C08F3")

  constructor() { }

  ngOnInit() {
  }

}
