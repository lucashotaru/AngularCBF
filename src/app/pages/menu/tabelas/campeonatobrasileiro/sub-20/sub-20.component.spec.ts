/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sub-20Component } from './sub-20.component';

describe('Sub-20Component', () => {
  let component: Sub-20Component;
  let fixture: ComponentFixture<Sub-20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sub-20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub-20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
