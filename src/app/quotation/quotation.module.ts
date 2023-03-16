import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PrimengModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationRoutingModule } from './quotation-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    QuotationRoutingModule,
    PrimengModule,
    TableModule,
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


  ]
})
export class QuotationModule { }
