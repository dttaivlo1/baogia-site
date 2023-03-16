import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: '', component:ListComponent},
  {path: 'create', component:CreateComponent},
  {path: 'edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule { }
