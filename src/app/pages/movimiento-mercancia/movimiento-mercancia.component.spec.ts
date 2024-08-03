import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoMercanciaComponent } from './movimiento-mercancia.component';

describe('MovimientoMercanciaComponent', () => {
  let component: MovimientoMercanciaComponent;
  let fixture: ComponentFixture<MovimientoMercanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientoMercanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimientoMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
