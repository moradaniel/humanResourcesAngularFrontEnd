import {NgModule} from '@angular/core';


import {PeopleListComponent} from './people-list.component';
//import {PeopleViewDetailsComponent} from "./people-view-details.component";
import {ContentFilterPipe} from "./content-filter.pipe";
//import {PeopleViewDetailsModalComponent} from "./people-view-details-modal.component";

//import { ModalModule } from 'ngx-bootstrap';
import {PeopleManagementComponent} from "./people-management.component";
//import {PeopleEditComponent} from "./people-edit.component";
//import {CommonModule} from "@angular/common";
import {PeopleRoutingModule} from "./people-routing.module";
import {CommonModule} from '@angular/common';
import {AppModule} from '../app.module';
import {DemoModalServiceStaticComponentComponent} from '../demo-modal-service-static-component/demo-modal-service-static-component.component';
import {SharedBootstrapModule} from '../shared/shared-bootstrap.module';
//import {PeopleAddComponent} from "./people-add.component";

@NgModule({
  imports: [/* ModalModule.forRoot(),*/
    PeopleRoutingModule,
    CommonModule,
    SharedBootstrapModule

  ],
  declarations: [PeopleManagementComponent,
                 PeopleListComponent/*,
                 PeopleViewDetailsComponent,
                 PeopleViewDetailsModalComponent
                ,PeopleAddComponent
                ,PeopleEditComponent*/
                , DemoModalServiceStaticComponentComponent
                ,ContentFilterPipe],
  exports: [PeopleManagementComponent,
            PeopleListComponent/*,
            PeopleViewDetailsComponent,
            PeopleViewDetailsModalComponent
            ,PeopleAddComponent
            ,PeopleEditComponent*/
            ,DemoModalServiceStaticComponentComponent
            ,ContentFilterPipe]
})
export class PeopleModule { }
