/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FemininoSub16Component } from './feminino-sub16.component';

describe('FemininoSub16Component', () => {
  let component: FemininoSub16Component;
  let fixture: ComponentFixture<FemininoSub16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemininoSub16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemininoSub16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
