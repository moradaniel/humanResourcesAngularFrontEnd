import {BsModalRef} from 'ngx-bootstrap';
import {Component, OnInit} from '@angular/core';
import {Person} from './person';


@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!--div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div -->
    
    <people-edit [person]="person"
                 (onEdited)="onEdited()">
    </people-edit>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div>
  `
})
export class PeopleEditModalComponent implements OnInit {
  title: string;
  closeBtnName: string;

  person: Person

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {

  }

  onEdited() {
    this.bsModalRef.hide();
  }
}
