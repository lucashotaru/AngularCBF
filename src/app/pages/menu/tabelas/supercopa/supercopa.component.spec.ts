/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SupercopaComponent } from './supercopa.component';

describe('SupercopaComponent', () => {
  let component: SupercopaComponent;
  let fixture: ComponentFixture<SupercopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupercopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupercopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
