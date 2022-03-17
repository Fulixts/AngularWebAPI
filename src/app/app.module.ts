import { BsModalService } from 'ngx-bootstrap/modal';
import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ModalComponent } from './modal/modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';

@NgModule({
  declarations: [AppComponent, TodoItemComponent, ModalComponent, UpdateModalComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
