
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent,
  ],
  entryComponents: [],
  imports: [ 
 
    
BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
     
    IonicModule,ToastrModule,BrowserAnimationsModule,ToastrModule.forRoot(), ReactiveFormsModule,FormsModule, HttpClientModule,HttpClientJsonpModule,
   ],
  providers: [ StatusBar, ToastrService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ReactiveFormsModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
