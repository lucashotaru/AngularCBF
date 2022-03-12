/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuperCopaMasculinoComponent } from './superCopaMasculino.component';

describe('SuperCopaMasculinoComponent', () => {
  let component: SuperCopaMasculinoComponent;
  let fixture: ComponentFixture<SuperCopaMasculinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCopaMasculinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCopaMasculinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
