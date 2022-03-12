/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuperCopaSub17Component } from './superCopaSub17.component';

describe('SuperCopaSub17Component', () => {
  let component: SuperCopaSub17Component;
  let fixture: ComponentFixture<SuperCopaSub17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCopaSub17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCopaSub17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
