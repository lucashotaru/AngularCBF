/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbaTabelasComponent } from './aba-tabelas.component';

describe('AbaTabelasComponent', () => {
  let component: AbaTabelasComponent;
  let fixture: ComponentFixture<AbaTabelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaTabelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaTabelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
