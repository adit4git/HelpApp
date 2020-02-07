import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StubServerProvider } from './_utils';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing.routing';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';

import { JwtUtil } from './_utils';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AdminComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule ,
      ReactiveFormsModule,
      HttpClientModule,
      appRoutingModule
   ],
   providers: [
      {provide: HTTP_INTERCEPTORS, useClass: JwtUtil, multi: true},
      StubServerProvider ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
