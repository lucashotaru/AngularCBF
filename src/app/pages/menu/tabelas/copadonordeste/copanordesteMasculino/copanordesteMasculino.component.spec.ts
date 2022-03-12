/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CopanordesteMasculinoComponent } from './copanordesteMasculino.component';

describe('CopanordesteMasculinoComponent', () => {
  let component: CopanordesteMasculinoComponent;
  let fixture: ComponentFixture<CopanordesteMasculinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopanordesteMasculinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopanordesteMasculinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
