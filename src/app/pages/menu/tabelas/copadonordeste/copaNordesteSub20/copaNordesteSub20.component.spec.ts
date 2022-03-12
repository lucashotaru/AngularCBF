/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CopaNordesteSub20Component } from './copaNordesteSub20.component';

describe('CopaNordesteSub20Component', () => {
  let component: CopaNordesteSub20Component;
  let fixture: ComponentFixture<CopaNordesteSub20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopaNordesteSub20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopaNordesteSub20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
