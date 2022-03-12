/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FemininoA1Component } from './FemininoA1.component';

describe('FemininoA1Component', () => {
  let component: FemininoA1Component;
  let fixture: ComponentFixture<FemininoA1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemininoA1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemininoA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
