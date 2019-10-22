import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipelist/recipe.model';
import { ShoppingService } from 'src/app/shoppinglist/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipelist/recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit{
  recipe: Recipe;
  id: number;
  constructor(private shoppingService: ShoppingService,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['index']
      this.recipe = this.recipeService.getSingleRecipe(this.id)
    })
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  addToCart = (ingredients: Ingredient[]) => {
    this.shoppingService.addIngredientsToCart(ingredients);
  }

  onDeleteRecipe = () => {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route})
  }

}
