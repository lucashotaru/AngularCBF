/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Copabrasilsub20Component } from './copabrasilsub20.component';

describe('Copabrasilsub20Component', () => {
  let component: Copabrasilsub20Component;
  let fixture: ComponentFixture<Copabrasilsub20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Copabrasilsub20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Copabrasilsub20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
