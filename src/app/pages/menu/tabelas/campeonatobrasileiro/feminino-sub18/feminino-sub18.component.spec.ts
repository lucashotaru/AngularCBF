/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FemininoSub18Component } from './feminino-sub18.component';

describe('FemininoSub18Component', () => {
  let component: FemininoSub18Component;
  let fixture: ComponentFixture<FemininoSub18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemininoSub18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemininoSub18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
