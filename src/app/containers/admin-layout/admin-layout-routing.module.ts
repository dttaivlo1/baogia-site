import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotationModule } from 'src/app/quotation/quotation.module';

const routes: Routes = [
  {path: '', component:AdminLayoutComponent, children: [
    {path: 'dashboard', component:DashboardComponent},

    {path: 'baogia', loadChildren: ()=>QuotationModule},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
