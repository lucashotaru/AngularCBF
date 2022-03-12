/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CopaNodesteEliminatoriasComponent } from './copaNodesteEliminatorias.component';

describe('CopaNodesteEliminatoriasComponent', () => {
  let component: CopaNodesteEliminatoriasComponent;
  let fixture: ComponentFixture<CopaNodesteEliminatoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopaNodesteEliminatoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopaNodesteEliminatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
