/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CopaNordestePreCopaComponent } from './copaNordestePreCopa.component';

describe('CopaNordestePreCopaComponent', () => {
  let component: CopaNordestePreCopaComponent;
  let fixture: ComponentFixture<CopaNordestePreCopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopaNordestePreCopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopaNordestePreCopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
