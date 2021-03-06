import { Component, Input, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { DataService } from '../Data/data.service';
import { ITodoItem } from '../todo-item/TodoItem';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public bsModal: BsModalRef, public data: DataService) { }

  modalText: string = '{"id": 0, "description": "string", "createdAt": "2022-03-16T23:28:36", "finishedAt": "2022-03-16T23:28:36","status": 0}';

  ngOnInit(): void {
  }

  onCofirm(value: string){
    alert(`POST Completed: ${value}`);
    this.data.PostTodoItem(JSON.parse(value)).subscribe(
      data => console.log(data, 'response')
    );
    this.bsModal.hide();
  }
  onCancel(){
    this.bsModal.hide();
  }
}
