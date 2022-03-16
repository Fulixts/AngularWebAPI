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

  @Input() todoPost: ITodoItem[];

  ngOnInit(): void {
  }

  onCofirm(){

  }
  onCancel(){
    this.bsModal.hide();

  }
}
