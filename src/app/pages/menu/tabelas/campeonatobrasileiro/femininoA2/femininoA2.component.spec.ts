/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FemininoA2Component } from './femininoA2.component';

describe('FemininoA2Component', () => {
  let component: FemininoA2Component;
  let fixture: ComponentFixture<FemininoA2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemininoA2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemininoA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
