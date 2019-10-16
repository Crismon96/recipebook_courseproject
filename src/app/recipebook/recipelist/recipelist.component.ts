import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [new Recipe("A Test Recipe", "This is just a test", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"), new Recipe("Another Test Recipe", "This is just a test", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")];
  @Output() recipeSelected = new EventEmitter<Recipe>()
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected = (recipe: any) => {
    console.log("on recipe Selected fired", recipe)
    this.recipeSelected.emit(recipe);
  }

}
