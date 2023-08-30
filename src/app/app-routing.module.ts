import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminLayoutModule } from './modules/admin-layout/admin-layout.module';
import { StandardGuard } from './core/guards/standard.guard';
import * as path from 'path';

const routes: Routes = [
  {path: '', loadChildren: ()=>AdminLayoutModule},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
