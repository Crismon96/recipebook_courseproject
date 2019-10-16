import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipelist/recipe.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
