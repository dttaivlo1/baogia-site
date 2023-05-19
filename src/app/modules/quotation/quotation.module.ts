import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PrimengModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe} from '@angular/common';
import { QuotationRoutingModule } from './quotation-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CustomerFormComponent } from './sub-component/customer-form/customer-form.component';
import { PropertyFormComponent } from './sub-component/property-form/property-form.component';
import { IndexFormComponent } from './sub-component/index-form/index-form.component';
import { PropertyInfoComponent } from './edit/property-info/property-info.component';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    CustomerFormComponent,
    PropertyFormComponent,
    IndexFormComponent,
    PropertyInfoComponent
  ],
  imports: [
    FormsModule   ,
    CommonModule,
    QuotationRoutingModule,
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
  ],
  providers: [CurrencyPipe, DecimalPipe]
})
export class QuotationModule { }
