import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray,copyArrayItem,transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public recipeMenu :RecipeItem[];
  public currentRecipe :RecipeItem[];
  ngOnInit(): void {
    this.recipeMenu= [];
    this.currentRecipe= [];
    let rute = new RecipeItem({name:"Rutebaga",configurable:false})
    rute.options = [];
    let myOption = new RecipeOption();
    myOption.isRequired=true;
    myOption.name="Color";
    rute.options.push(myOption);
    
    this.recipeMenu.push(rute);
    this.recipeMenu.push(new RecipeItem({name:"Flour",configurable:false}));
    this.recipeMenu.push(new RecipeItem({name:"Butter",configurable:false}));
  }
  drop(event: CdkDragDrop<RecipeItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(JSON.stringify(event.previousIndex));
      console.log(JSON.stringify(event.currentIndex));
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  printRecipe(){
    this.currentRecipe.forEach((element:RecipeItem) => {
      console.log(JSON.stringify(element));
    });
  }
  title = 'algodemo';
}
export class RecipeOption{
  public name:string;
  public value:string;
  public isRequired: boolean;
}
export class RecipeItem{
  public name:string;
  public quantity:number;
  public configurable:boolean;
  public options : RecipeOption[];
  public constructor(init?:Partial<RecipeItem>) {
    Object.assign(this, init);
}
}
