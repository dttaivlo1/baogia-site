import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotationModule } from '../quotation/quotation.module';
import { UserManagementModule } from '../user-management/user-management.module';
const routes: Routes = [
  {path: '', component:AdminLayoutComponent, children: [
    {path: 'dashboard', component:DashboardComponent},

    {path: 'baogia', loadChildren: () => QuotationModule},
    {path: 'quan-li-nhan-vien', loadChildren: ()=>UserManagementModule},
    {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
