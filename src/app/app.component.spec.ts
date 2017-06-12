/* tslint:disable:no-unused-variable */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map/map.component';
import { InterfaceComponent } from './interface/interface.component';
import { InfoComponent } from './info/info.component';
import { ApiService } from './api.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ], providers : [ApiService]
    });
    TestBed.compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
