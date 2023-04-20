import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { JwPaginationModule } from 'jw-angular-pagination';



@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    
    CommonModule,
    UserManagementRoutingModule,
    PrimengModule,
    TableModule,
    InputNumberModule,
    ButtonModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 100,
    })
  ,


  ]
})
export class UserManagementModule { }
