import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstatisticasJogadoresComponent } from './estatisticas-jogadores.component';

describe('EstatisticasJogadoresComponent', () => {
  let component: EstatisticasJogadoresComponent;
  let fixture: ComponentFixture<EstatisticasJogadoresComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatisticasJogadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatisticasJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
