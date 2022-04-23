import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService){}
    private recipes: Recipe[] = [
        new Recipe(
         'Ceviche',
         'Simplemente delicioso, plato bandera del Perú.', 
        "https://recetaparahoy.com/wp-content/uploads/2017/06/ceviche-peruano.jpg",
        [
            new Ingredient('Pescado', 1),
            new Ingredient('Cebolla', 2),
            new Ingredient('Limón', 10),
            new Ingredient('Ají limo', 1)
        ]),
        new Recipe(
          'Lomo Saltado',
           'Todo un clásico del sabor peruano.', 
        "https://recetinas.com/wp-content/uploads/2019/10/lomo-saltado.jpg",
        [
            new Ingredient('Carne de lomo', 1),
            new Ingredient('Papas', 2),
            new Ingredient('cebolla', 2),
            new Ingredient('Arroz', 1)
        ])
      ];

    getRecipes(){
        return this.recipes.slice(); //whith slice we get a copy of the recipes array
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

}