import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.scss']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() itemClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onItemClicked = () => {
    console.log("item clicked")
    this.itemClicked.emit();
  }
}
