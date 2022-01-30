import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/*Angula material*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import { MapsComponent } from './components/maps/maps.component';

import {AgmCoreModule} from "@agm/core";
import { MapsEditComponent } from './components/maps/maps-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  entryComponents: [
    MapsEditComponent
  ],
  declarations: [
    AppComponent,
    MapsComponent,
    MapsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC941jCe34AyetO4WL6tsE7aXqsB1Hv1Cc'
    }),
    AgmCoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
