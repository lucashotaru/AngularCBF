/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FemininoComponent } from './Feminino.component';

describe('FemininoComponent', () => {
  let component: FemininoComponent;
  let fixture: ComponentFixture<FemininoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemininoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemininoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
