import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import{DragDropModule} from '@angular/cdk/drag-drop';
import { IngredientComponent } from './ingredient/ingredient.component'
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule,
    DragDropModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
