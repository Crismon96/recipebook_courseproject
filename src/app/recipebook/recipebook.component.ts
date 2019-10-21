import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipelist/recipe.service';
import { Recipe } from './recipelist/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.scss']
})
export class RecipebookComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {

  }

}
