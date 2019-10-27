import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RecipeService } from '../recipebook/recipelist/recipe.service';
import { Recipe } from '../recipebook/recipelist/recipe.model';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private RecipeService: RecipeService) { }

  putFirebaseData() {
    const recipes = this.RecipeService.getRecipes();
    this.http.put('https://recipe-projekt.firebaseio.com/recipes.json', recipes).subscribe(result => {
      console.log(result);
    })
  }

  fetchFirebaseData() {
    this.http.get<Recipe[]>('https://recipe-projekt.firebaseio.com/recipes.json').subscribe(result => {
      this.RecipeService.putRecipes(result)
    })
  }
  
}
