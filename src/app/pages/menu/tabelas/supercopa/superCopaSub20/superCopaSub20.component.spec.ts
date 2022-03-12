/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuperCopaSub20Component } from './superCopaSub20.component';

describe('SuperCopaSub20Component', () => {
  let component: SuperCopaSub20Component;
  let fixture: ComponentFixture<SuperCopaSub20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCopaSub20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCopaSub20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
