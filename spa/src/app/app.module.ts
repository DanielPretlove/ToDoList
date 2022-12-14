import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { CardComponent } from './components/generic/card/card.component';
import { DatepickerComponent } from './components/generic/datepicker/datepicker.component';
import { MenuComponent } from './components/generic/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './components/generic/todolist/todolist.component';
import { CreateComponent } from './components/generic/dialog/create/create.component';
import { EditComponent } from './components/generic/dialog/edit/edit.component';
import { DeleteComponent } from './components/generic/dialog/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/generic/form/input/input.component';
import { TextareaComponent } from './components/generic/form/textarea/textarea.component';
import { SelectorComponent } from './components/generic/form/selector/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DatepickerComponent,
    TodolistComponent,
    MenuComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    InputComponent,
    TextareaComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
