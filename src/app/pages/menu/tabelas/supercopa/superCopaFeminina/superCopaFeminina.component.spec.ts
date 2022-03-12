/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuperCopaFemininaComponent } from './superCopaFeminina.component';

describe('SuperCopaFemininaComponent', () => {
  let component: SuperCopaFemininaComponent;
  let fixture: ComponentFixture<SuperCopaFemininaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCopaFemininaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCopaFemininaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
