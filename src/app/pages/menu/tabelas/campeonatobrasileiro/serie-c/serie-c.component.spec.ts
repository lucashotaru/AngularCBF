import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCComponent } from './serie-c.component';

describe('SerieCComponent', () => {
  let component: SerieCComponent;
  let fixture: ComponentFixture<SerieCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
