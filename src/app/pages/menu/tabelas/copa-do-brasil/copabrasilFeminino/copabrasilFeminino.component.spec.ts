/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CopabrasilFemininoComponent } from './copabrasilFeminino.component';

describe('CopabrasilFemininoComponent', () => {
  let component: CopabrasilFemininoComponent;
  let fixture: ComponentFixture<CopabrasilFemininoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopabrasilFemininoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopabrasilFemininoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
