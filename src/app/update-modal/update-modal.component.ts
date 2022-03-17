import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../Data/data.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  constructor(public bsModal: BsModalRef, public data: DataService) { }

  @Input() todoId: number;

  modalText: string;

  ngOnInit(): void {
    this.data.getTodoItemsById(this.todoId).subscribe(
      data => {
        console.log(data);

        this.modalText = JSON.stringify(data);
      }
    );

  }

  update(id: number){

  }

  onCofirm(value: string){
    alert(value);
    this.data.updateTodoItem(this.todoId, JSON.parse(value)).subscribe(
      data => console.log(data, 'response')

    );
  }

  onCancel(){
    this.bsModal.hide();
  }
}
