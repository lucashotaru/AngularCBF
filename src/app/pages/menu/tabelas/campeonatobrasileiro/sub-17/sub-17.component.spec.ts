/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sub-17Component } from './sub-17.component';

describe('Sub-17Component', () => {
  let component: Sub-17Component;
  let fixture: ComponentFixture<Sub-17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sub-17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub-17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
