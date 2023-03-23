import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Firebase
import { environment } from '../../enviroment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
   HttpClientModule,
   BrowserAnimationsModule,
   ReactiveFormsModule,
   AngularFireModule.initializeApp(environment.firebaseConfig, 'mytestapp'),
AngularFirestoreModule, // Only required for database features

AngularFireAuthModule, // Only required for auth features,

AngularFireStorageModule ,
AngularFireDatabaseModule,// Only required for storage features
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
