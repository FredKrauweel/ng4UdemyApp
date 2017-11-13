import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
   recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d'),
    new Recipe('The 2d Test Recipe', 'This is a second simply test', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}


