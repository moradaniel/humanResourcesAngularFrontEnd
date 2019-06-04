import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {Person} from './person';
import {PeopleService} from './people.service';
import {PeopleListComponent} from "./people-list.component";
import {PeopleModalServiceFromComponentComponent} from './people-modal-service-from-component.component';
// import {PeopleAddComponent} from "./people-add.component";

@Component({
  selector: 'people-management',
  templateUrl: './people-management.component.html'
  , providers: [PeopleService,
               // ContentFilterPipe,
                PeopleListComponent //,
                //PeopleAddComponent
  ]
})
export class PeopleManagementComponent implements OnInit {

  public currentView: string = 'list';

  @Output() onGoToAdd = new EventEmitter();

  @ViewChild(PeopleModalServiceFromComponentComponent, {static: false})
  peopleModalServiceFromComponentComponent: PeopleModalServiceFromComponentComponent;

  constructor() {}

  openModalWithComponent(person: Person) {
    this.peopleModalServiceFromComponentComponent.openModalWithComponent(person);
  }

  navigateTo(view: string) {
    this.currentView = view;
  }

  public goToAdd() {
    this.currentView = "add";
    this.onGoToAdd.emit(null);
  }

  ngOnInit() {

  }

}
