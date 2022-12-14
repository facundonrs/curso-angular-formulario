import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CrearAlumnosComponent } from './crear-alumnos.component';

describe('CrearAlumnosComponent', () => {
  let component: CrearAlumnosComponent;
  let fixture: ComponentFixture<CrearAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAlumnosComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientModule, RouterTestingModule, MaterialModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('DESAFIO UNIT TEST - Verifica si el formulario es válido', () => {
    const formulario = component.formulario;

    formulario.controls.nombre.setValue('Nombre alumno');
    formulario.controls.apellido.setValue('Apellido alumno');
    formulario.controls.dni.setValue('35146437');
    formulario.controls.fecha_nacimiento.setValue('2000-01-01');
    formulario.controls.pais.setValue('1');
    formulario.controls.ciudad.setValue('1');
    formulario.controls.password.setValue('Asdsd23432');
    formulario.controls.username.setValue('username');
    formulario.controls.email.setValue('test@test.com');
    formulario.controls.celular.setValue('3804274107');
    formulario.controls.domicilio.setValue('Calle abc');

    
    expect(formulario.valid).toBeTrue();
  });

  it('DESAFIO UNIT TEST - Devuelve el formulario no válido - no se cumple validator de fecha', () => {
    const formulario = component.formulario;

    /**
     * El formulario válida que sea mayor de 18
     */
    formulario.controls.nombre.setValue('Nombre alumno');
    formulario.controls.apellido.setValue('Apellido alumno');
    formulario.controls.dni.setValue('35146437');
    formulario.controls.fecha_nacimiento.setValue('2020-01-01');
    formulario.controls.pais.setValue('1');
    formulario.controls.ciudad.setValue('1');
    formulario.controls.password.setValue('Asdsd23432');
    formulario.controls.username.setValue('username');
    formulario.controls.email.setValue('test@test.com');
    formulario.controls.celular.setValue('3804274107');
    formulario.controls.domicilio.setValue('Calle abc');

    expect(formulario.controls.fecha_nacimiento.valid).toBeFalse();
  });
});
