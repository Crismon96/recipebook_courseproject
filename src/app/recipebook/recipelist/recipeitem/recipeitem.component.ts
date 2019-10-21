import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.scss']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }
}
