/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Copabrasilsub17Component } from './copabrasilsub17.component';

describe('Copabrasilsub17Component', () => {
  let component: Copabrasilsub17Component;
  let fixture: ComponentFixture<Copabrasilsub17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Copabrasilsub17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Copabrasilsub17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
