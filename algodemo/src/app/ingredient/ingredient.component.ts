import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { RecipeItem } from '../app.component';
import {CdkDragDrop, moveItemInArray,copyArrayItem,transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() ingredient :RecipeItem;
  constructor() { }
  configureQty(){
    let conf = !this.ingredient.configurable;
    this.ingredient.configurable= conf;
  }

  ngOnInit() {
  }

}
