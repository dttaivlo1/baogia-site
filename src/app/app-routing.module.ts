import { StandardGuard } from './standard.guard';
import { AdminLayoutModule } from './containers/admin-layout/admin-layout.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', loadChildren: ()=>AdminLayoutModule, canActivateChild:[StandardGuard]},
  {path: 'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
