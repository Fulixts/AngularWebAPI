import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data/data.service';
import { ITodoItem } from './TodoItem';
import { Subscription } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-todoItem',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor(private data: DataService) { }

  todoItems: ITodoItem[] = [];
  todoItemfiltered: ITodoItem[] = [];
  errorMsg: string = '';
  sub!: Subscription;
  private _listFilter: string = '';

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value : string) {
    this._listFilter = value;
    console.log('In Setter: ', value);
  }

  ngOnInit(): void {
    this.sub = this.data.getTodoItems().subscribe(
      (data: ITodoItem[]) => this.todoItems = data,
      (err: any) => console.log(err)
    );
  }

  getTodoItem(){
    this.data.getTodoItems().subscribe({
      next: _todoItems => {
        this.todoItems = _todoItems;
        this.todoItemfiltered = this.todoItems;
      },
      error: err => this.errorMsg = err
    });
  }
  deleteTodoItem(id:number){
    this.data.deleteTodoItem(id).subscribe(
      (data: void) => {
        let index: number = this.todoItems.findIndex(todo => todo.id === id);
        this.todoItems.splice(index, 1);
      },
      (err: any) => console.log(err)
    );
  }
  openModal(){
    this.data.modalService.show(ModalComponent);
  }
}
