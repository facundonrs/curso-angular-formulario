import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesListadoComponent } from './inscripciones-listado.component';

describe('InscripcionesListadoComponent', () => {
  let component: InscripcionesListadoComponent;
  let fixture: ComponentFixture<InscripcionesListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
