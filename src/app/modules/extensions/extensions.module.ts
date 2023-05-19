import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtensionsRoutingModule } from './extensions-routing.module';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    ExtensionsRoutingModule
  ]
})
export class ExtensionsModule { }
