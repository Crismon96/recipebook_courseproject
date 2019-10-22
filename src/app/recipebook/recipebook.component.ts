import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipelist/recipe.model';import { RecipeService } from './recipelist/recipe.service';
;

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.scss']
})
export class RecipebookComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }

}
