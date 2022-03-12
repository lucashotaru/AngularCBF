/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CopabrasilMasculinoComponent } from './copabrasilMasculino.component';

describe('CopabrasilMasculinoComponent', () => {
  let component: CopabrasilMasculinoComponent;
  let fixture: ComponentFixture<CopabrasilMasculinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopabrasilMasculinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopabrasilMasculinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
