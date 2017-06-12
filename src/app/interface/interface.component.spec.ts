/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { MapComponent } from '../map/map.component';

import { DebugElement } from '@angular/core';

import { InterfaceComponent } from './interface.component';

describe('InterfaceComponent', () => {
  let component: InterfaceComponent;
  let fixture: ComponentFixture<InterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
