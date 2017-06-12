import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { InterfaceComponent } from './interface/interface.component';
import { InfoComponent } from './info/info.component';

//AIzaSyBAkVzzss52PwyMmN5LAzhWxAU4S1-Ducs
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InterfaceComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
       AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAkVzzss52PwyMmN5LAzhWxAU4S1-Ducs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
