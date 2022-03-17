import { ITodoItem } from './../todo-item/TodoItem';
import { Injectable, Pipe } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:44301/api/TodoItems';

  constructor(private http: HttpClient, public modalService: BsModalService){}

  getTodoItems(): Observable<ITodoItem[]>{
    return this.http.get<ITodoItem[]>(this.apiUrl).pipe(
    tap(data => console.log('All', JSON.stringify(data))),
    catchError(this.handleError));
  }
  getTodoItemsById(id: number): Observable<ITodoItem[]>{
    return this.http.get<ITodoItem[]>(`${this.apiUrl}/${id}`).pipe(
    tap(data => console.log('All', JSON.stringify(data))),
    catchError(this.handleError));
  }

  PostTodoItem(todoItem: ITodoItem): Observable<ITodoItem>{
    return this.http.post<ITodoItem>(this.apiUrl, todoItem, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }

  updateTodoItem(todoId: number, TodoItem: ITodoItem): Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/${todoId}`, TodoItem, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }

  deleteTodoItem(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  handleError(err: HttpErrorResponse) {
    let errorMsg = '';

    if (err.error instanceof ErrorEvent) {
      errorMsg = `An error Ocurred: ${err.error.message}`
    }else{
      errorMsg = `Server Returned code: ${err.status}, error message: ${err.message}`
    }
    console.error(errorMsg);
    return throwError(errorMsg);
  }

  showConfirm(todoItem: ITodoItem[]){
    const bsModal: BsModalRef = this.modalService.show(ModalComponent);
    bsModal.content.todoPost = todoItem;

  }
}
