import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
