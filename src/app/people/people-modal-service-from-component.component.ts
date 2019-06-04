import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {PeopleViewDetailsModalComponent} from './people-view-details-modal.component';
import {Person} from './person';


/**
 *
 * Sample from "Modal with component" section in:
 * https://valor-software.com/ngx-bootstrap/#/modals
 *
 */
@Component({
  selector: 'people-modal-service-component',
  // ,templateUrl: './service-component.html'
  template: `
    <div>
    </div>
  `
})
export class PeopleModalServiceFromComponentComponent {
  selectedPerson: Person;

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModalWithComponent(person: Person) {
    this.selectedPerson = person;

    const initialState = {
      title: 'Person Details',
      person: person
    };
    this.bsModalRef = this.modalService.show(PeopleViewDetailsModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
